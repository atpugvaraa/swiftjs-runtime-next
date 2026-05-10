import React, { ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { ViewProps } from "../types";

interface ImageProps extends ViewProps, ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  className = "",
  ...props
}) => {
  return <motion.img src={src} alt={alt} className={className} {...(props as any)} />;
};
