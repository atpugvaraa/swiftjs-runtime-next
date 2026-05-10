import React, { ImgHTMLAttributes } from "react";
import { ViewProps } from "../types";
interface ImageProps extends ViewProps, ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
}
export declare const Image: React.FC<ImageProps>;
export {};
