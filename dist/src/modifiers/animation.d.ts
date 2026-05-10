import React from "react";
import { MotionProps } from "framer-motion";
import { ViewProps } from "../types";
export declare const animationVariants: {
    readonly default: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: 20;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: -20;
        };
    };
    readonly slide: {
        readonly initial: {
            readonly opacity: 0;
            readonly x: -20;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly x: 0;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly x: 20;
        };
    };
    readonly scale: {
        readonly initial: {
            readonly opacity: 0;
            readonly scale: 0.8;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly scale: 1;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly scale: 0.8;
        };
    };
    readonly fade: {
        readonly initial: {
            readonly opacity: 0;
        };
        readonly animate: {
            readonly opacity: 1;
        };
        readonly exit: {
            readonly opacity: 0;
        };
    };
    readonly bounce: {
        readonly initial: {
            readonly opacity: 0;
            readonly scale: 0.3;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly scale: 1;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly scale: 0.5;
        };
    };
};
export type AnimationType = keyof typeof animationVariants;
interface MotionModifierProps extends ViewProps {
    children: React.ReactNode;
    type?: AnimationType;
    duration?: number;
    delay?: number;
    repeat?: number;
    whileHover?: MotionProps["whileHover"];
    whileTap?: MotionProps["whileTap"];
    animate?: MotionProps["animate"];
    initial?: MotionProps["initial"];
    exit?: MotionProps["exit"];
    layout?: boolean;
    layoutId?: string;
}
export declare const MotionModifier: React.FC<MotionModifierProps>;
export declare const withMotion: <P extends object>(Component: React.ComponentType<P>, animationType?: AnimationType) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P & MotionModifierProps> & React.RefAttributes<HTMLDivElement>>;
interface AnimatePresenceWrapperProps extends ViewProps {
    children: React.ReactNode;
    initial?: boolean;
}
export declare const AnimatePresenceWrapper: React.FC<AnimatePresenceWrapperProps>;
export {};
