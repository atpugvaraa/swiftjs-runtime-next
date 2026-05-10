import { jsx as _jsx } from "react/jsx-runtime";
export const Rectangle = ({ fill, width, height, className = "", style, ...props }) => {
    const inlineStyle = {
        backgroundColor: fill,
        width,
        height,
        ...style,
    };
    return _jsx("div", { className: className, style: inlineStyle, ...props });
};
