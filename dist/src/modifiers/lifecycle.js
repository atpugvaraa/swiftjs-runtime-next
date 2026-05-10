"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export const LifecycleModifier = ({ children, onAppear, onDisappear, className = "", style, ...props }) => {
    const hasAppeared = useRef(false);
    useEffect(() => {
        // Only call onAppear once when component first mounts
        if (!hasAppeared.current && onAppear) {
            onAppear();
            hasAppeared.current = true;
        }
        // Cleanup function called on unmount
        return () => {
            if (hasAppeared.current && onDisappear) {
                onDisappear();
                hasAppeared.current = false;
            }
        };
    }, [onAppear, onDisappear]);
    return (_jsx("div", { className: className, style: style, ...props, children: children }));
};
// HOC for adding lifecycle to any component
export const withLifecycle = (Component, options) => {
    const WrappedComponent = (props) => {
        return (_jsx(LifecycleModifier, { onAppear: options?.onAppear, onDisappear: options?.onDisappear, children: _jsx(Component, { ...props }) }));
    };
    WrappedComponent.displayName = `withLifecycle(${Component.displayName || Component.name})`;
    return WrappedComponent;
};
