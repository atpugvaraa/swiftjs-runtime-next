import { jsx as _jsx } from "react/jsx-runtime";
export const RoundedRectangle = ({ fill, width, height, cornerRadius, className = "", style, ...props }) => {
    const inlineStyle = {
        backgroundColor: fill,
        width,
        height,
        ...style,
    };
    let roundedClass = "";
    if (typeof cornerRadius === "number") {
        inlineStyle.borderRadius = `${cornerRadius}px`;
    }
    else if (cornerRadius) {
        roundedClass = `rounded-${cornerRadius}`;
    }
    else {
        roundedClass = "rounded-md"; // Default roundedness
    }
    return (_jsx("div", { className: `${roundedClass} ${className}`, style: inlineStyle, ...props }));
};
