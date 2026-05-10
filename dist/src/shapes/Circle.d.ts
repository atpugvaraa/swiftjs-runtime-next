import React from "react";
import { ViewProps } from "../types";
interface CircleProps extends ViewProps {
    size?: number | string;
    fill?: string;
}
export declare const Circle: React.FC<CircleProps>;
export {};
