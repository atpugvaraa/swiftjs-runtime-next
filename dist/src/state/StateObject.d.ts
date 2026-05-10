import { Observable } from "./ObservedObject";
export declare class StateObject<T> extends Observable {
    private _value;
    constructor(initialValue: T);
    get value(): T;
    set value(newValue: T);
    update(updater: (currentValue: T) => T): void;
    patch(patch: Partial<T> extends object ? Partial<T> : never): void;
}
export declare function useReactiveStateObject<T>(stateObjectInstance: StateObject<T>): [T, (newValue: T) => void];
export declare function useReactiveState<T>(initialValue: T): [T, (newValue: T) => void, StateObject<T>];
export type StateGetter<T> = () => T;
export type StateSetter<T> = (value: T) => void;
export declare function createBinding<T>(stateObject: StateObject<T>): {
    get: () => T;
    set: (value: T) => void;
};
export { Observable };
