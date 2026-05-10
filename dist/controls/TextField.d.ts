import React from "react";
import { ViewProps } from "../types";
interface TextFieldProps extends ViewProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
export declare const TextField: React.FC<TextFieldProps>;
export {};
