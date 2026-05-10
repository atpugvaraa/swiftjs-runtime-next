import { jsx as _jsx } from "react/jsx-runtime";
export const Capsule = ({ fill, width, height, className = "", style, ...props }) => {
    const inlineStyle = {
        backgroundColor: fill,
        width,
        height,
        ...style,
    };
    return (_jsx("div", { className: `rounded-full ${className}`, style: inlineStyle, ...props }));
};
