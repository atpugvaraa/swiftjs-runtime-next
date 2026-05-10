import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { motion } from "framer-motion";
export const ZStack = ({ children, alignment = "center", className = "", style, ...props }) => {
    const alignMap = {
        top: "items-start justify-items-center",
        center: "items-center justify-items-center",
        bottom: "items-end justify-items-center",
        leading: "items-center justify-items-start",
        trailing: "items-center justify-items-end",
        topLeading: "items-start justify-items-start",
        topTrailing: "items-start justify-items-end",
        bottomLeading: "items-end justify-items-start",
        bottomTrailing: "items-end justify-items-end",
    };
    const childrenWithPosition = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const childElement = child;
            return React.cloneElement(childElement, {
                className: `col-start-1 row-start-1 z-0 ${childElement.props.className || ""}`,
            });
        }
        // Wrap non-element children (like text strings) in a div to ensure they stack correctly
        return _jsx("div", { className: "col-start-1 row-start-1 z-0", children: child });
    });
    return (_jsx(motion.div, { className: `grid grid-cols-1 grid-rows-1 ${alignMap[alignment]} ${className}`, style: style, ...props, children: childrenWithPosition }));
};
