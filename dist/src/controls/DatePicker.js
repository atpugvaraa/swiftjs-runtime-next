import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const DatePicker = ({ children, selection, label, className = "", style, ...props }) => {
    const combinedStyle = {
        ...style,
    };
    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        selection.set(new Date(dateValue));
    };
    // Format the date to YYYY-MM-DD for the input value
    const dateString = selection.get().toISOString().split("T")[0];
    return (_jsxs("div", { className: `flex flex-col ${className}`, style: combinedStyle, ...props, children: [label && _jsx("label", { className: "mb-1 text-sm font-medium", children: label }), _jsx("input", { type: "date", value: dateString, onChange: handleDateChange, className: "border rounded px-2 py-1" }), children] }));
};
