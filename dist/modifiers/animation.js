"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// Animation variants for common SwiftUI animations
export const animationVariants = {
    // Default animations
    default: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    },
    // Slide animations
    slide: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
    },
    // Scale animations
    scale: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    },
    // Fade animations
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    // Bounce animations
    bounce: {
        initial: { opacity: 0, scale: 0.3 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
    },
};
export const MotionModifier = ({ children, type = "default", duration = 0.3, delay = 0, repeat = undefined, whileHover, whileTap, animate, initial, exit, layout = false, layoutId, className = "", style, ...props }) => {
    const animationConfig = animationVariants[type];
    const transition = {
        duration,
        delay,
        repeat,
        ease: "easeInOut",
    };
    const motionProps = {
        className,
        style,
        initial: initial || animationConfig.initial,
        animate: animate || animationConfig.animate,
        exit: exit || animationConfig.exit,
        transition,
        whileHover,
        whileTap,
        layout,
        layoutId,
        ...props,
    };
    return _jsx(motion.div, { ...motionProps, children: children });
};
// HOC for adding motion to any component
export const withMotion = (Component, animationType = "default") => {
    const MotionComponent = React.forwardRef(({ children, type = animationType, ...motionProps }, ref) => {
        return (_jsx(MotionModifier, { type: type, ...motionProps, ref: ref, children: _jsx(Component, { ...motionProps, children: children }) }));
    });
    MotionComponent.displayName = `withMotion(${Component.displayName || Component.name})`;
    return MotionComponent;
};
export const AnimatePresenceWrapper = ({ children, initial = false, }) => {
    return _jsx(AnimatePresence, { initial: initial, children: children });
};
