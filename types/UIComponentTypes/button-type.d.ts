import { CSSProperties, HTMLAttributeAnchorTarget, ReactNode } from "react";

type ButtonType = {
    children: ReactNode | string;
    size?: "small" | "medium" | "large";
    variant?: "solid" | "text" | string;
    type?: "button" | "link" | null;
    className?: string;
    style?: CSSProperties;
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