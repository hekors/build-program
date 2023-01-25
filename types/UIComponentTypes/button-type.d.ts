import { HTMLAttributeAnchorTarget, ReactNode } from "react";

type ButtonType = {
    children: ReactNode;
    size?: "small" | "medium" | "large";
    variant?: "solid" | "text";
    type?: "button" | "link";
    className?: string;
    id?: string;
    onClick?: function;
    link?: {
        target?: HTMLAttributeAnchorTarget,
        path?: string;
        externalURL?: string;
    };
};

export type { 
    ButtonType
};