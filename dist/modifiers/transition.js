"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
export const Transition = ({ children, type, isActive, className = "", style, ...props }) => {
    const variants = {
        opacity: {
            enter: { opacity: 1 },
            exit: { opacity: 0 },
        },
        slide: {
            enter: { x: 0 },
            exit: { x: "-100%" },
        },
        scale: {
            enter: { scale: 1 },
            exit: { scale: 0 },
        },
    };
    const combinedStyle = {
        ...style,
    };
    return (_jsx(AnimatePresence, { children: isActive && (_jsx(motion.div, { initial: "exit", animate: "enter", exit: "exit", variants: variants[type], className: className, style: combinedStyle, ...props, children: children })) }));
};
