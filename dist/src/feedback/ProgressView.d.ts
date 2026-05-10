import React from "react";
import { ViewProps } from "../types";
interface ProgressViewProps extends ViewProps {
    value: number;
    total?: number;
}
export declare const ProgressView: React.FC<ProgressViewProps>;
export {};
