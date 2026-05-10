import { useState, useEffect, useDebugValue } from "react";
// A simple observable class that components can subscribe to
export class Observable {
    subscribers = new Set();
    // Method to notify subscribers of changes
    notify() {
        this.subscribers.forEach((subscriber) => subscriber());
    }
    // Method for components to subscribe
    subscribe(callback) {
        this.subscribers.add(callback);
        return () => {
            this.subscribers.delete(callback);
        }; // Cleanup
    }
}
// Hook to observe changes in an Observable object
export function useObservedObject(obj) {
    // Force a re-render when the observable notifies
    const [_, setTick] = useState(0);
    useEffect(() => {
        const unsubscribe = obj.subscribe(() => {
            setTick((tick) => tick + 1); // Increment tick to force re-render
        });
        return () => unsubscribe();
    }, [obj]);
    // For React DevTools inspection
    useDebugValue(obj);
    return obj;
}
