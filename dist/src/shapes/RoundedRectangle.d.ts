import React from "react";
import { ViewProps } from "../types";
interface RoundedRectangleProps extends ViewProps {
    fill?: string;
    width?: string | number;
    height?: string | number;
    cornerRadius?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | number;
}
export declare const RoundedRectangle: React.FC<RoundedRectangleProps>;
export {};
