export declare class Observable {
    private subscribers;
    protected notify(): void;
    subscribe(callback: () => void): () => void;
}
export declare function useObservedObject<T extends Observable>(obj: T): T;
