import { jsx as _jsx } from "react/jsx-runtime";
export const Grid = ({ children, columns, rows, spacing = 0, className = "", style, ...props }) => {
    const gridStyle = {
        display: "grid",
        gap: `${spacing}px`,
        ...style,
    };
    if (columns) {
        gridStyle.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
    }
    if (rows) {
        gridStyle.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
    }
    return (_jsx("div", { className: className, style: gridStyle, ...props, children: children }));
};
