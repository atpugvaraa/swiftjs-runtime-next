import React, { ReactNode } from "react";
interface AlertOptions {
    title: string;
    message?: string;
    buttons: {
        text: string;
        role?: "cancel" | "destructive";
        onClick?: () => void;
    }[];
}
interface AlertContextType {
    showAlert: (options: AlertOptions) => void;
}
export declare const useAlert: () => AlertContextType;
interface AlertProviderProps {
    children: ReactNode;
}
export declare const AlertProvider: React.FC<AlertProviderProps>;
export {};
