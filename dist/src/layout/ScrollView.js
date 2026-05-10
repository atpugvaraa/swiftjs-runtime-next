import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const ScrollView = ({ children, className = "", ...props }) => {
    return (_jsx(motion.div, { className: `overflow-y-auto flex flex-col ${className}`, ...props, children: children }));
};
