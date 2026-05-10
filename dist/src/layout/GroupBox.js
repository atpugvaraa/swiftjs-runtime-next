import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const GroupBox = ({ children, title, className = "", style, ...props }) => {
    const containerStyle = {
        border: "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#0a0a0a",
        ...style,
    };
    const headerStyle = {
        fontSize: "14px",
        fontWeight: "600",
        color: "#374151",
        marginBottom: "12px",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    };
    return (_jsxs("div", { className: `${className}`, style: containerStyle, ...props, children: [title && _jsx("div", { style: headerStyle, children: title }), children] }));
};
