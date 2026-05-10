import React from "react";
import { ViewProps, Binding } from "../types";
interface DatePickerProps extends ViewProps {
    selection: Binding<Date>;
    label?: string;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
