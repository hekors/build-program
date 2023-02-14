import React, { CSSProperties, ReactNode } from 'react';

type HeadlineType = {
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
  className?: string;
};

type ParagraphType = {
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
  className?: string;
};

export type { HeadlineType, ParagraphType };
