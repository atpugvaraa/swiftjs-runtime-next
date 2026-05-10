import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext, createContext } from "react";
const AlertContext = createContext(undefined);
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
};
export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (options) => {
        setAlert(options);
    };
    const handleClose = () => {
        setAlert(null);
    };
    return (_jsxs(AlertContext.Provider, { value: { showAlert }, children: [children, alert && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: _jsxs("div", { className: "bg-white rounded-lg p-4 w-80", children: [_jsx("h3", { className: "font-bold text-lg", children: alert.title }), alert.message && _jsx("p", { className: "text-sm mt-2", children: alert.message }), _jsx("div", { className: "mt-4 flex justify-end space-x-2", children: alert.buttons.map((button, index) => (_jsx("button", { onClick: () => {
                                    if (button.onClick)
                                        button.onClick();
                                    handleClose();
                                }, className: `px-4 py-2 rounded text-sm font-medium ${button.role === "destructive"
                                    ? "bg-red-500 text-white"
                                    : button.role === "cancel"
                                        ? "bg-gray-200"
                                        : "bg-blue-500 text-white"}`, children: button.text }, index))) })] }) }))] }));
};
