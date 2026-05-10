import { jsx as _jsx } from "react/jsx-runtime";
export const TextField = ({ value, onChange, placeholder, className = "", style, ...props }) => {
    return (_jsx("input", { type: "text", value: value, onChange: onChange, placeholder: placeholder, className: `w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow sm:text-sm ${className}`, style: style, ...props }));
};
