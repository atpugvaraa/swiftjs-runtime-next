import React from "react";
import { ViewProps } from "../types";
interface ButtonProps extends ViewProps {
    title: string;
    action: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "destructive";
}
export declare const Button: React.FC<ButtonProps>;
export {};
