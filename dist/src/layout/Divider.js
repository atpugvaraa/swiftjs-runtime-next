import { jsx as _jsx } from "react/jsx-runtime";
export const Divider = ({ className = "", ...props }) => {
    return _jsx("div", { className: `w-full h-px bg-gray-200 ${className}`, ...props });
};
