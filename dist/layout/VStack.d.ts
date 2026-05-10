import React from "react";
import { ViewProps } from "../types";
interface VStackProps extends ViewProps {
    alignment?: "leading" | "center" | "trailing";
    spacing?: number;
}
export declare const VStack: React.FC<VStackProps>;
export {};
