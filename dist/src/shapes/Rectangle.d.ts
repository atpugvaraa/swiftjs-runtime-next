import React from "react";
import { ViewProps } from "../types";
interface RectangleProps extends ViewProps {
    fill?: string;
    width?: string | number;
    height?: string | number;
}
export declare const Rectangle: React.FC<RectangleProps>;
export {};
