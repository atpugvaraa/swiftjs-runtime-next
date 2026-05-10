import React from "react";
import { ViewProps, Binding } from "../types";
interface ColorPickerProps extends ViewProps {
    selection: Binding<string>;
    label?: string;
}
export declare const ColorPicker: React.FC<ColorPickerProps>;
export {};
