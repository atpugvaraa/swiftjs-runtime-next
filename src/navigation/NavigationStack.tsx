import React, { CSSProperties } from "react";
import { ViewProps } from "@swiftjs/runtime";

interface NavigationStackProps extends ViewProps {
  // Minimal, runtime-friendly surface for the transpiler. Navigation semantics
  // are intentionally basic — this component acts as a simple container and
  // coordinator for navigation-related children emitted by the transpiler.
  initialRoute?: string;
}

export const NavigationStack: React.FC<NavigationStackProps> = ({
  children,
  className = "",
  style,
  ...props
}) => {
  const combinedStyle: CSSProperties = {
    ...style,
  };

  // Keep behavior intentionally minimal: render children and allow the
  // transpiler to provide navigation props. Advanced navigation features
  // (history handling, routing glue) are out of scope for the current
  // stabilization effort and can be layered on top by the app.
  return (
    <div className={`navigation-stack ${className}`} style={combinedStyle} {...props}>
      {children}
    </div>
  );
};

export default NavigationStack;
