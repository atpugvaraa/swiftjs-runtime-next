import React from "react";
import { ViewProps } from "../types";
interface GeometryReaderProps extends Omit<ViewProps, "children"> {
    children: (size: {
        width: number;
        height: number;
    }) => React.ReactNode;
}
export declare const GeometryReader: React.FC<GeometryReaderProps>;
export {};
