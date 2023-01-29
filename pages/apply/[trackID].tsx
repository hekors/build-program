import Container from "@/components/UIComponents/Container";
import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import TracksData from '@/components/ProgramTrackSection/ProgramTrackData.json';
import { ProgramTrackCardType } from "@/types/program-track-card-type";

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
            <SectionContainer>
                
            </SectionContainer>
        </Container>
    )
};

export default TrackApplicationView;