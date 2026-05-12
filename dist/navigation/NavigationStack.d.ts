import React from "react";
import { ViewProps } from "@swiftjs/runtime";
interface NavigationStackProps extends ViewProps {
    initialRoute?: string;
}
export declare const NavigationStack: React.FC<NavigationStackProps>;
export default NavigationStack;
