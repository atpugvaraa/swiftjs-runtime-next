import { CSSProperties, ReactNode } from "react";
export interface ViewProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    id?: string;
}
export type Binding<T> = {
    get: () => T;
    set: (value: T) => void;
};
