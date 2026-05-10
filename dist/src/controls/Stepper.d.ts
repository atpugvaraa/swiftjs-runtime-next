import React from "react";
import { ViewProps } from "../types";
interface StepperProps extends ViewProps {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange: (value: number) => void;
    label?: string;
}
export declare const Stepper: React.FC<StepperProps>;
export {};
