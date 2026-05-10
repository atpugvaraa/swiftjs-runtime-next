import React, { ReactNode } from "react";
interface SheetContextType {
    showSheet: (content: ReactNode) => void;
    hideSheet: () => void;
}
export declare const useSheet: () => SheetContextType;
interface SheetProviderProps {
    children: ReactNode;
}
export declare const SheetProvider: React.FC<SheetProviderProps>;
export {};
