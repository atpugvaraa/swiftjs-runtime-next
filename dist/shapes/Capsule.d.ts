import React from "react";
import { ViewProps } from "../types";
interface CapsuleProps extends ViewProps {
    fill?: string;
    width?: string | number;
    height?: string | number;
}
export declare const Capsule: React.FC<CapsuleProps>;
export {};
