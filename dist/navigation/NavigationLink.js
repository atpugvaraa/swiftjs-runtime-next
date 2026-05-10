import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
export const NavigationLink = ({ href, children, target = "_self", replace = false, className = "", style, ...props }) => {
    return (_jsx(Link, { href: href, target: target, replace: replace, className: `no-underline text-inherit inline-block ${className}`, style: style, ...props, children: children }));
};
