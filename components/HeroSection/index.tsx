import Container from "@/components/UIComponents/Container";
import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import Headline from "@/components/UIComponents/Typography/Headline";
import Button from "@/components/UIComponents/Button";
import Paragraph from "../UIComponents/Typography/Paragraph";
import Link from "next/link";

const HeroSection: React.FunctionComponent = (props: any) => {
    return (
        <Container className="hero-section pt-36 pb-12 bg-gray-900 relative" id="hero-section" {...props}>
            <SectionContainer className="hero-section-content">
                <Link href={"https://hekors.tech"} target="_blank">
                    <Paragraph className="mb-6">{"An initiative by HEKORS Community"}</Paragraph>
                </Link>
                <Headline className="text-8xl text-left font-extrabold flex flex-col items-center justify-start w-[20ch] text-white">
                    {"Learn by building beautiful things."}
                </Headline>
                <Container className="flex flex-row items-center justify-start gap-6 my-12">
                    <Button className="bg-white text-gray-900 hover:bg-gray-200">{"Apply Now for Fall Batch"}</Button>
                    <Button className="hover:bg-gray-800" variant="text">{"See upcoming batches"}</Button>
                </Container>
            </SectionContainer>
        </Container>
    )
};

export default HeroSection;