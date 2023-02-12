import { signInWithGitHub, signInWithTwitter } from "@/auth/authentication";
import Button from "@/components/UIComponents/Button";
import Container from "@/components/UIComponents/Container";
import { SectionContainer } from "@/components/UIComponents/Container/SectionContainer";
import { WrappedContainer } from "@/components/UIComponents/Container/WrappedContainer";
import Headline from "@/components/UIComponents/Typography/Headline";
import Paragraph from "@/components/UIComponents/Typography/Paragraph";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const JoinProgram = () => {
    return (
        <Container>
            <SectionContainer>
                <Container>
                    <Headline className="text-5xl font-semibold text-gray-900 text-left">
                        {"Join Build Program"}
                    </Headline>
                    <Paragraph className="text-left mt-4">
                        {"Authorize with one of the social account to get verified"}
                    </Paragraph>
                </Container>
                <Container className="grid grid-cols-1 items-center justify-center w-[320px] mt-12 gap-4">
                    {[
                        {
                            authTitle: "Continue with GitHub",
                            authIcon: <FaGithub />,
                            isRecommended: true,
                            authMethod: signInWithGitHub
                        }
                    ].map((authItem, authIndex) => (
                        <React.Fragment key={authIndex}>
                            <Button 
                                size="large"
                                variant="solid"
                                className="bg-gray-900 text-white hover:bg-gray-800 active:brightness-125 
                                    flex flex-row items-center justify-start gap-4"
                                onClick={authItem?.authMethod}
                            >
                                <WrappedContainer>
                                    {authItem?.authIcon}
                                </WrappedContainer>
                                <Headline className="font-medium">
                                    {authItem?.authTitle}
                                </Headline>
                            </Button>
                        </React.Fragment>
                    ))}
                </Container>
            </SectionContainer>
        </Container>
    )
};

export default JoinProgram;