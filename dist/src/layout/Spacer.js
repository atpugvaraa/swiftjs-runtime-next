import { jsx as _jsx } from "react/jsx-runtime";
export const Spacer = ({ className = "", ...props }) => {
    return _jsx("div", { className: `flex-grow ${className}`, ...props });
};
