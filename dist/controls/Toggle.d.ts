import React from "react";
import { ViewProps, Binding } from "../types";
interface ToggleProps extends ViewProps {
    isOn: Binding<boolean>;
    label?: string;
}
export declare const Toggle: React.FC<ToggleProps>;
export {};
