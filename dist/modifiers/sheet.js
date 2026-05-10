import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext, createContext } from "react";
const SheetContext = createContext(undefined);
export const useSheet = () => {
    const context = useContext(SheetContext);
    if (!context) {
        throw new Error("useSheet must be used within a SheetProvider");
    }
    return context;
};
export const SheetProvider = ({ children }) => {
    const [sheetContent, setSheetContent] = useState(null);
    const showSheet = (content) => {
        setSheetContent(content);
    };
    const hideSheet = () => {
        setSheetContent(null);
    };
    return (_jsxs(SheetContext.Provider, { value: { showSheet, hideSheet }, children: [children, sheetContent && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end", onClick: hideSheet, children: _jsx("div", { className: "bg-white rounded-t-lg w-full max-w-lg p-4", onClick: (e) => e.stopPropagation(), children: sheetContent }) }))] }));
};
