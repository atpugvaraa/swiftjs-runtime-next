import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus, Minus } from "lucide-react"; // Assuming lucide-react is available
export const Stepper = ({ value, min = 0, max = 100, step = 1, onChange, label, className = "", ...props }) => {
    const increment = () => {
        if (value + step <= max) {
            onChange(value + step);
        }
        else {
            onChange(max);
        }
    };
    const decrement = () => {
        if (value - step >= min) {
            onChange(value - step);
        }
        else {
            onChange(min);
        }
    };
    return (_jsxs("div", { className: `flex items-center space-x-2 ${className}`, ...props, children: [label && _jsx("span", { className: "mr-2", children: label }), _jsx("button", { onClick: decrement, disabled: value === min, className: "p-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50", children: _jsx(Minus, { size: 16 }) }), _jsx("span", { className: "font-medium", children: value }), _jsx("button", { onClick: increment, disabled: value === max, className: "p-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50", children: _jsx(Plus, { size: 16 }) })] }));
};
