import { jsx as _jsx } from "react/jsx-runtime";
export const NavigationStack = ({ children, className = "", style, ...props }) => {
    const combinedStyle = {
        ...style,
    };
    // Keep behavior intentionally minimal: render children and allow the
    // transpiler to provide navigation props. Advanced navigation features
    // (history handling, routing glue) are out of scope for the current
    // stabilization effort and can be layered on top by the app.
    return (_jsx("div", { className: `navigation-stack ${className}`, style: combinedStyle, ...props, children: children }));
};
export default NavigationStack;
