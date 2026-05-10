import React from "react";
import { ViewProps } from "../types";
interface ZStackProps extends ViewProps {
    alignment?: "top" | "center" | "bottom" | "leading" | "trailing" | "topLeading" | "topTrailing" | "bottomLeading" | "bottomTrailing";
}
export declare const ZStack: React.FC<ZStackProps>;
export {};
