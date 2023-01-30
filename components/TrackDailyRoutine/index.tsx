import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import Container from "@/components/UIComponents/Container";

import TrackDailyRoutineData from '@/components/TrackDailyRoutine/TrackDailyRoutineData.json';
import { TrackDailyRoutinePropType, TrackDailyRoutineType } from "@/types/track-daily-routine-type";
import { useEffect, useState } from "react";
import Headline from "@/components/UIComponents/Typography/Headline";
import Paragraph from "@/components/UIComponents/Typography/Paragraph";
import { WrappedContainer } from "@/components/UIComponents/Container/WrappedContainer";

const TrackDailyRoutine: React.FunctionComponent<TrackDailyRoutinePropType> = ({ trackSlugID }, props: any) => {
    const [trackDailyRoutineData, setTrackDailyRoutineData] = useState<TrackDailyRoutineType>(undefined);

    useEffect(() => {
        TrackDailyRoutineData?.map((data) => {
            if (data?.slugID === trackSlugID) {
                setTrackDailyRoutineData(data);
            }
        });
        console.log("track", trackDailyRoutineData);
    });

    return (
        <SectionContainer className="track-daily-routine-section flex flex-row items-start justify-around" {...props}>
            <Container className="track-daily-routine-details-section flex flex-col items-start justify-start gap-6">
                <Headline className="font-extrabold text-4xl text-gray-900 w-[26ch]">
                    {trackDailyRoutineData?.trackDisplayTitle}
                </Headline>
                <Paragraph className="text-base font-medium w-[42ch]">
                    {trackDailyRoutineData?.trackDisplayDescription}
                </Paragraph>
                <Container className="working-days-details-wrapper mt-6">
                    <Headline className="font-semibold text-gray-900 text-lg">{"Working Days"}</Headline>
                    <WrappedContainer>
                        <Paragraph>
                            {`From ${trackDailyRoutineData?.trackDailyRoutineTimeline?.workingDays?.startingWorkDay}, 
                            To ${trackDailyRoutineData?.trackDailyRoutineTimeline?.workingDays?.endingWorkDay}`}
                        </Paragraph>
                    </WrappedContainer>
                </Container>
            </Container>
            <Container className="track-daily-routine-timeline-flow-wrapper">
                <Container className="track-daily-routine-timeline-flow-container flex flex-col items-start justify-start">
                    {/* @ts-ignore */}
                    {trackDailyRoutineData?.trackDailyRoutineTimeline?.workingDays?.flow?.map((routineTask, routineTaskIndex: number) => (
                        <Container 
                            className="relative p-6 border-l-4 border-gray-900"
                            key={routineTaskIndex}
                        >
                            <WrappedContainer className="routine-task-slot_time-icon-layer-wrapper absolute flex flex-row 
                                items-center justify-end gap-6"
                            >
                                <Paragraph className="text-sm font-normal text-gray-500 absolute
                                    top-1 -left-[120px]"
                                >
                                    {routineTask?.timestamp}
                                </Paragraph>
                                <WrappedContainer className="w-6 h-6 border-4 border-gray-100 bg-gray-900 absolute rounded-full 
                                    top-0 -left-[38px]
                                " />
                            </WrappedContainer>
                            <Container className="routine-task-slot-content-container w-[320px] flex flex-col items-start justify-start gap-2">
                                <Headline className="text-xl font-semibold">{routineTask?.slotTitle}</Headline>
                                <Paragraph>{routineTask?.slotDescription}</Paragraph>
                            </Container>
                        </Container>
                    ))}
                </Container>
            </Container>
        </SectionContainer>
    )
};

export default TrackDailyRoutine;