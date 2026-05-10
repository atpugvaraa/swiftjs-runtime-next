import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Image = ({ src, alt = "", className = "", ...props }) => {
    return _jsx(motion.img, { src: src, alt: alt, className: className, ...props });
};
