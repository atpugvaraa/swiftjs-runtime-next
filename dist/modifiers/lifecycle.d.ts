import React from "react";
import { ViewProps } from "../types";
interface LifecycleModifierProps extends ViewProps {
    children: React.ReactNode;
    onAppear?: () => void;
    onDisappear?: () => void;
}
export declare const LifecycleModifier: React.FC<LifecycleModifierProps>;
export declare const withLifecycle: <P extends {
    children?: React.ReactNode;
}>(Component: React.ComponentType<P>, options?: {
    onAppear?: () => void;
    onDisappear?: () => void;
}) => {
    (props: P): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
