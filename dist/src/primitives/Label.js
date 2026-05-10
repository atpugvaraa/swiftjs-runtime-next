import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as LucideIcons from "lucide-react";
export const Label = ({ title, systemImage, className = "", style, ...props }) => {
    const IconComponent = LucideIcons[systemImage];
    if (!IconComponent || typeof IconComponent !== "function") {
        console.warn(`Icon "${systemImage}" not found in lucide-react.`);
        return (_jsx("div", { className: `flex items-center space-x-2 ${className}`, style: style, ...props, children: _jsx("span", { children: title }) }));
    }
    return (_jsxs("div", { className: `flex items-center space-x-2 ${className}`, style: style, ...props, children: [_jsx(IconComponent, { size: 16 }), _jsx("span", { children: title })] }));
};
