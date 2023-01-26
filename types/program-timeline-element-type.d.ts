import { ButtonType } from "@/types/UIComponentTypes/button-type";

type ProgramTimelineElementType = {
    emoji: string;
    headline: string;
    description: string;
    displayURL: string;
    displayURLPath: string;
    timelineAction?: {
        children: string;
        variant: string;
    }[];
};

export type { ProgramTimelineElementType };