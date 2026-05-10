"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
export const GeometryReader = ({ children, className = "", style, ...props }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                setDimensions({ width: clientWidth, height: clientHeight });
            }
        };
        updateDimensions();
        // Listen for resize events
        const resizeObserver = new ResizeObserver(updateDimensions);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    const containerStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "1px", // Ensure it has some height even when empty
        minWidth: "1px", // Ensure it has some width even when empty
        ...style,
    };
    return (_jsx("div", { ref: containerRef, className: `${className}`, style: containerStyle, ...props, children: dimensions.width > 0 && dimensions.height > 0 && children(dimensions) }));
};
