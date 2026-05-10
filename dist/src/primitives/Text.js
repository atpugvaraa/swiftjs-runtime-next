import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Text = ({ content, font = "body", color, className = "", style, ...props }) => {
    const fontMap = {
        largeTitle: "text-5xl font-bold",
        title: "text-2xl font-bold",
        body: "text-base",
        caption: "text-xs text-gray-500",
    };
    return (_jsx(motion.span, { className: `${fontMap[font]} ${className}`, style: { color: color, ...style }, ...props, children: content }));
};
