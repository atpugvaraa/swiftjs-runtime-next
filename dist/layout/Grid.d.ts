import React from "react";
import { ViewProps } from "../types";
interface GridProps extends ViewProps {
    columns?: number;
    rows?: number;
    spacing?: number;
}
export declare const Grid: React.FC<GridProps>;
export {};
