import Button from "@/components/UIComponents/Button";
import Container from "@/components/UIComponents/Container";
import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import Headline from "@/components/UIComponents/Typography/Headline";
import Image from "next/image";

const PageNotFoundView: React.FunctionComponent = () => {
    return (
        <main className="page-not-found-view">
            <Container className="bg-gray-900">
                <SectionContainer>
                    <Image 
                        src={"/ios-emojis/smile.svg"}
                        width={"80"}
                        height={"80"}
                        alt="smile"
                        className="mx-auto"
                    />
                    <Headline className="font-mono text-white text-center mt-4 text-3xl flex flex-col items-center justify-start gap-2">
                        <span>{"This page is wrong, "}</span>
                        <span>{"but the builders are nearby."}</span>
                    </Headline>
                    <Container className="flex flex-row items-center justify-center gap-3 mt-6">
                        <Button className="bg-gray-800 hover:bg-gray-700">
                            {"Report Page Issue"}
                        </Button>
                        <Button variant="solid" className="bg-white text-gray-900 hover:bg-white hover:bg-opacity-90">
                            {"Back to Home Page"}
                        </Button>
                    </Container>
                </SectionContainer>
            </Container>
        </main>
    )
};

export default PageNotFoundView;