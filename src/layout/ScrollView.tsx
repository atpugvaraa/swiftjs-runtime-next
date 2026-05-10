import React from "react";
import { motion } from "framer-motion";
import { ViewProps } from "../types";

export const ScrollView: React.FC<ViewProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.div className={`overflow-y-auto flex flex-col ${className}`} {...props}>
      {children}
    </motion.div>
  );
};
