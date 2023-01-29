import { ProgramTrackCardType } from "@/types/program-track-card-type";
import Container from "@/components/UIComponents/Container";
import Headline from "@/components/UIComponents/Typography/Headline";
import Paragraph from "@/components/UIComponents/Typography/Paragraph";
import Image from "next/image";
import Button from "@/components/UIComponents/Button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ProgramTrackCard: React.FunctionComponent<ProgramTrackCardType> = ({
    trackTitle,
    trackDescription,
    trackApplyPage,
    trackEmoji
}, props: any) => {
    return (
        <Container className="program-track-card bg-white overflow-hidden border border-gray-700
            transition-all hover:-translate-y-2
        " {...props}>
            <Container className="program-track-card__header p-6 bg-gray-800 flex flex-row items-start justify-start gap-4">
                <Image 
                    src={`/ios-emojis/${trackEmoji}.svg`}
                    width="50"
                    height="50"
                    alt={trackEmoji}
                    className="p-3 bg-gray-700 rounded-md"
                    priority
                />
                <Container className="flex flex-col items-start justify-start gap-1">
                    <Paragraph className="uppercase text-sm font-medium">{"Build Program Track"}</Paragraph>
                    <Headline className="text-white font-semibold text-2xl">{trackTitle + " Track"}</Headline>
                </Container>
            </Container>
            <Container className="program-track-card__content-wrapper p-6">
                <Paragraph className="">
                    {trackDescription}
                </Paragraph>
                <Container className="flex flex-row items-center justify-start gap-6 mt-6">
                    <Link href={trackApplyPage} className="w-full">
                        <Button variant="solid" className="flex flex-row items-center justify-center gap-2 hover:gap-3 transition-all w-full" type={null}>
                            {"Learn more"}{" "}
                            <FaArrowRight />
                        </Button>
                    </Link>
                </Container>
            </Container>
        </Container>
    )
};

export default ProgramTrackCard;