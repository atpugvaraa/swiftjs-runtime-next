import { jsx as _jsx } from "react/jsx-runtime";
export const Circle = ({ size = 50, fill, className = "", style, ...props }) => {
    const combinedStyle = {
        backgroundColor: fill,
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
        ...style,
    };
    return (_jsx("div", { className: `rounded-full ${className}`, style: combinedStyle, ...props }));
};
