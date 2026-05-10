import { jsx as _jsx } from "react/jsx-runtime";
export const Slider = ({ value, min = 0, max = 100, step = 1, onChange, className = "", ...props }) => {
    return (_jsx("input", { type: "range", min: min, max: max, step: step, value: value, onChange: (e) => onChange(Number(e.target.value)), className: `w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ${className}`, ...props }));
};
