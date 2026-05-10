import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ViewProps } from "../types";

interface HStackProps extends ViewProps {
  alignment?: "top" | "center" | "bottom";
  spacing?: number;
}

export const HStack: React.FC<HStackProps> = ({
  children,
  alignment = "center",
  spacing = 0,
  className = "",
  style,
  ...props
}) => {
  const alignMap = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  };

  return (
    <motion.div
      className={`flex flex-row ${alignMap[alignment]} ${className}`}
      style={{ gap: `${spacing}px`, ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
