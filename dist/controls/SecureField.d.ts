import React from "react";
import { ViewProps, Binding } from "../types";
interface SecureFieldProps extends ViewProps {
    text: Binding<string>;
    placeholder?: string;
}
export declare const SecureField: React.FC<SecureFieldProps>;
export {};
