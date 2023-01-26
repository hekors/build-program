import { CSSProperties, ReactNode } from "react";

type GenericComponentType = {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    id?: string;
};

export type { GenericComponentType };