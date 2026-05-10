import React from "react";
import { ViewProps } from "../types";
interface TabViewProps extends ViewProps {
    initialTab?: number;
    labels: string[];
}
export declare const TabView: React.FC<TabViewProps>;
export {};
