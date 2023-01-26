import React, { CSSProperties, ReactNode } from "react";

type HeadlineType = {
    children?: ReactNode;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    style?: CSSProperties;
    id?: string;
    className?: string;
};

type ParagraphType = {
    children?: ReactNode;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
    style?: CSSProperties;
    id?: string;
    className?: string;
};

export type { HeadlineType, ParagraphType };