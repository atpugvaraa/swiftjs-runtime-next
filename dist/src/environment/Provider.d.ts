import React, { ReactNode } from "react";
interface EnvironmentValues {
    [key: string]: unknown;
}
export declare const EnvironmentContext: React.Context<EnvironmentValues>;
interface EnvironmentProviderProps {
    values: EnvironmentValues;
    children: ReactNode;
}
export declare const EnvironmentProvider: React.FC<EnvironmentProviderProps>;
export {};
