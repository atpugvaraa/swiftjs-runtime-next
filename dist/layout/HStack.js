import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const HStack = ({ children, alignment = "center", spacing = 0, className = "", style, ...props }) => {
    const alignMap = {
        top: "items-start",
        center: "items-center",
        bottom: "items-end",
    };
    return (_jsx(motion.div, { className: `flex flex-row ${alignMap[alignment]} ${className}`, style: { gap: `${spacing}px`, ...style }, ...props, children: children }));
};
