import React from "react";
import { ViewProps } from "../types";
interface TextProps extends ViewProps {
    content: string;
    font?: "largeTitle" | "title" | "body" | "caption";
    color?: string;
}
export declare const Text: React.FC<TextProps>;
export {};
