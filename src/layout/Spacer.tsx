import React from "react";
import { ViewProps } from "../types";

export const Spacer: React.FC<ViewProps> = ({ className = "", ...props }) => {
  return <div className={`flex-grow ${className}`} {...props} />;
};
