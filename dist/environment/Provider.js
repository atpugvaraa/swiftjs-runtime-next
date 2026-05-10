import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
// Create the context with a default value
export const EnvironmentContext = createContext({});
export const EnvironmentProvider = ({ values, children, }) => {
    const parentValues = useContext(EnvironmentContext);
    const combinedValues = { ...parentValues, ...values };
    return (_jsx(EnvironmentContext.Provider, { value: combinedValues, children: children }));
};
