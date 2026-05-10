import { jsx as _jsx } from "react/jsx-runtime";
export const ProgressView = ({ value, total = 1, className = "", style, ...props }) => {
    // Ensure value is within bounds
    const clampedValue = Math.max(0, Math.min(1, value / total));
    const containerStyle = {
        width: "100%",
        height: "4px",
        backgroundColor: "#e5e7eb",
        borderRadius: "2px",
        overflow: "hidden",
        ...style,
    };
    const progressStyle = {
        width: `${clampedValue * 100}%`,
        height: "100%",
        backgroundColor: "#3b82f6",
        borderRadius: "2px",
        transition: "width 0.3s ease",
    };
    return (_jsx("div", { className: `${className}`, style: containerStyle, role: "progressbar", "aria-valuenow": clampedValue, "aria-valuemin": 0, "aria-valuemax": 1, ...props, children: _jsx("div", { style: progressStyle }) }));
};
