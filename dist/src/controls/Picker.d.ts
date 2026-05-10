import React from "react";
import { ViewProps, Binding } from "../types";
interface PickerProps extends ViewProps {
    selection: Binding<string>;
    label?: string;
    options: {
        label: string;
        value: string;
    }[];
}
export declare const Picker: React.FC<PickerProps>;
export {};
