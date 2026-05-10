import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const VStack = ({ children, alignment = "center", spacing = 0, className = "", style, ...props }) => {
    const alignMap = {
        leading: "items-start",
        center: "items-center",
        trailing: "items-end",
    };
    return (_jsx(motion.div, { className: `flex flex-col ${alignMap[alignment]} ${className}`, style: { gap: `${spacing}px`, ...style }, ...props, children: children }));
};
