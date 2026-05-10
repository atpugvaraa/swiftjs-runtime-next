import React from "react";
import { ViewProps } from "../types";
import * as LucideIcons from "lucide-react";
interface LabelProps extends ViewProps {
    title: string;
    systemImage: keyof typeof LucideIcons;
}
export declare const Label: React.FC<LabelProps>;
export {};
