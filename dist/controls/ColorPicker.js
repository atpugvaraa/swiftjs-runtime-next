import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ColorPicker = ({ children, selection, label, className = "", style, ...props }) => {
    const combinedStyle = {
        ...style,
    };
    return (_jsxs("div", { className: `flex items-center ${className}`, style: combinedStyle, ...props, children: [label && _jsx("label", { className: "mr-2", children: label }), _jsx("input", { type: "color", value: selection.get(), onChange: (e) => selection.set(e.target.value), className: "w-8 h-8 border-none" }), children] }));
};
