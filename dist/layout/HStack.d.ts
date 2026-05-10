import React from "react";
import { ViewProps } from "../types";
interface HStackProps extends ViewProps {
    alignment?: "top" | "center" | "bottom";
    spacing?: number;
}
export declare const HStack: React.FC<HStackProps>;
export {};
