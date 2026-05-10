import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Picker = ({ children, selection, label, options, className = "", style, ...props }) => {
    const combinedStyle = {
        ...style,
    };
    return (_jsxs("div", { className: `flex flex-col ${className}`, style: combinedStyle, ...props, children: [label && _jsx("label", { className: "mb-1 text-sm font-medium", children: label }), _jsx("select", { value: selection.get(), onChange: (e) => selection.set(e.target.value), className: "border rounded px-2 py-1", children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) }), children] }));
};
