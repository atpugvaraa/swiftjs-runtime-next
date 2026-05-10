"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
export const TabView = ({ children, initialTab = 0, labels, className = "", ...props }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const childrenArray = React.Children.toArray(children);
    return (_jsxs("div", { className: `flex flex-col ${className}`, ...props, children: [_jsx("div", { className: "flex border-b border-gray-200", children: labels.map((label, index) => (_jsx("button", { className: `py-2 px-4 text-sm font-medium focus:outline-none ${activeTab === index
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"}`, onClick: () => setActiveTab(index), children: label }, index))) }), _jsx("div", { className: "p-4", children: childrenArray[activeTab] })] }));
};
