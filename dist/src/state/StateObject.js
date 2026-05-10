import { useState, useEffect, useDebugValue, useCallback } from "react";
import { Observable } from "./ObservedObject";
// StateObject class that extends Observable for reactive state management
export class StateObject extends Observable {
    _value;
    constructor(initialValue) {
        super();
        this._value = initialValue;
    }
    // Get the current value
    get value() {
        return this._value;
    }
    // Set a new value and notify subscribers
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this.notify();
        }
    }
    // Update the value using a function
    update(updater) {
        this.value = updater(this._value);
    }
    // Method to create a new StateObject from a partial update
    patch(patch) {
        if (typeof this._value === "object" && this._value !== null && patch) {
            this.value = { ...this._value, ...patch };
        }
    }
}
// Hook to use an already instantiated StateObject in a React component
export function useReactiveStateObject(stateObjectInstance) {
    // Use a local React state to force re-renders
    const [value, setLocalValue] = useState(stateObjectInstance.value);
    useEffect(() => {
        // Subscribe to changes in the StateObject instance
        const unsubscribe = stateObjectInstance.subscribe(() => {
            setLocalValue(stateObjectInstance.value); // Update local React state when StateObject notifies
        });
        return () => unsubscribe(); // Cleanup subscription
    }, [stateObjectInstance]); // Re-subscribe if stateObject instance changes
    // Create a stable setter function that updates the StateObject
    const setObservedValue = useCallback((newValue) => {
        // eslint-disable-next-line react-hooks/immutability
        stateObjectInstance.value = newValue; // This will trigger the StateObject's setter and notification
    }, [stateObjectInstance]);
    useDebugValue(value);
    return [value, setObservedValue];
}
// Hook to create and use a StateObject within a React component
export function useReactiveState(initialValue) {
    // Use useState with a lazy initializer to ensure StateObject is created only once
    const [stateObject] = useState(() => new StateObject(initialValue));
    // Use the useReactiveStateObject hook to get the reactive value and setter
    const [value, setValue] = useReactiveStateObject(stateObject);
    // Return the value, the setter, and the StateObject instance
    return [value, setValue, stateObject];
}
// Create a binding object from a StateObject for use with components that expect { get, set }
export function createBinding(stateObject) {
    return {
        get: () => stateObject.value,
        set: (value) => {
            stateObject.value = value;
        },
    };
}
// Re-export Observable for convenience
export { Observable };
