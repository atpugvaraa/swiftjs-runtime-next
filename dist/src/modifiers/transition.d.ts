import React from "react";
import { ViewProps } from "../types";
type TransitionType = "opacity" | "slide" | "scale";
interface TransitionProps extends ViewProps {
    type: TransitionType;
    isActive: boolean;
}
export declare const Transition: React.FC<TransitionProps>;
export {};
