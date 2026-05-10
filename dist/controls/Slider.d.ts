import React from "react";
import { ViewProps } from "../types";
interface SliderProps extends ViewProps {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange: (value: number) => void;
}
export declare const Slider: React.FC<SliderProps>;
export {};
