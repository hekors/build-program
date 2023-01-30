import Container from "@/components/UIComponents/Container";
import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import TracksData from '@/components/ProgramTrackSection/ProgramTrackData.json';
import { ProgramTrackCardType } from "@/types/program-track-card-type";
import Headline from "@/components/UIComponents/Typography/Headline";
import { WrappedContainer } from "@/components/UIComponents/Container/WrappedContainer";
import Image from "next/image";
import Paragraph from "@/components/UIComponents/Typography/Paragraph";
import TrackDailyRoutine from "@/components/TrackDailyRoutine";

const TrackApplicationView: React.FunctionComponent = () => {
    const router = useRouter();
    const { trackID } = router.query;

    const [trackApplyPageData, setTrackApplyPageData] = useState<ProgramTrackCardType>(
        { slugID: "", trackTitle: "", trackDescription: "", trackEmoji: "", trackApplyPage: "" }
    );

    useEffect(() => {
        TracksData?.map((track) => {
            if (track?.slugID === trackID) {
                setTrackApplyPageData(track);
            }
        })
    });

    return (
        <Container className="track-application-view">
            <Container className="track-application-view__hero-section bg-gray-900">
                <SectionContainer>
                    <Container className="track-application-details flex flex-col items-start justify-start gap-16">
                        <WrappedContainer className="track-title flex flex-row items-center justify-start gap-6">
                            <Image 
                                src={`/ios-emojis/${trackApplyPageData?.trackEmoji}.svg`}
                                width={"60"}
                                height={"60"}
                                alt={"emoji-" + trackApplyPageData?.trackEmoji}
                            />
                            <Headline className="text-6xl text-white font-bold">{trackApplyPageData?.trackTitle}</Headline>
                        </WrappedContainer>
                    <Container className="track-description-container flex flex-col items-start justify-start gap-4">
                            <Headline className="font-semibold text-white text-xl">{"About Track"}</Headline>
                            <Paragraph className="track-description text-lg w-[64ch]">
                                {trackApplyPageData?.trackDescription}
                            </Paragraph>
                    </Container>
                    </Container>
                </SectionContainer>
            </Container>
            <SectionContainer className="track-daily-routine-section">
                <TrackDailyRoutine trackSlugID={trackApplyPageData?.slugID} />
            </SectionContainer>
        </Container>
    )
};

export default TrackApplicationView;