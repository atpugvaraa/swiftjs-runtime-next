import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Button = ({ title, action, disabled = false, variant = "primary", className = "", style, ...props }) => {
    const variantClasses = {
        primary: disabled
            ? "bg-slate-400 text-slate-200 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600",
        secondary: disabled
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-200 text-slate-700 hover:bg-slate-300",
        destructive: disabled
            ? "bg-red-300 text-white cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600",
    };
    const handleClick = () => {
        if (!disabled) {
            action();
        }
    };
    return (_jsx(motion.button, { className: `inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${variantClasses[variant]} ${className}`, style: style, onClick: handleClick, disabled: disabled, ...props, children: title }));
};
