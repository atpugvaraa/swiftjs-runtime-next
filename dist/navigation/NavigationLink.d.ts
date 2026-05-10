import React from "react";
import { ViewProps } from "../types";
interface NavigationLinkProps extends ViewProps {
    href: string;
    children: React.ReactNode;
    target?: "_blank" | "_self" | "_parent" | "_top";
    replace?: boolean;
}
export declare const NavigationLink: React.FC<NavigationLinkProps>;
export {};
