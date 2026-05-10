import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const List = ({ children, className = "", ...props }) => {
    return (_jsx("ul", { className: `divide-y divide-gray-200 ${className}`, ...props, children: React.Children.map(children, (child) => (_jsx("li", { className: "py-2", children: child }))) }));
};
