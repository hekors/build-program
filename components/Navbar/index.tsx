import Container from "@/components/UIComponents/Container";
import Image from "next/image";
import Paragraph from "@/components/UIComponents/Typography/Paragraph";
import Link from "next/link";
import NavbarData from '@/components/Navbar/NavbarData.json';
import { useRef } from "react";
import Button from "@/components/UIComponents/Button";
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

const Navbar: React.FunctionComponent = () => {
    const NavbarDataRef = useRef(NavbarData);

    return (
        <Container className="navbar bg-gray-900 py-12" id="navbar">
            <Container className="navbar-content-container section-content-container flex flex-row items-center justify-between">
                <Link href={"/"}>
                    <Paragraph className="build-program-logo-wrapper flex flex-row items-start justify-start gap-1">
                        <Image 
                            src={'/ios-emojis/school-bag.svg'}
                            width={"20"}
                            height={"20"}
                            alt="bag"
                        />
                        <span className="text-white hover:text-gray-400">{"Build Program"}</span>
                    </Paragraph>
                </Link>
                <Container className="flex flex-row items-center justify-center gap-6">
                    {NavbarDataRef.current?.map((navbarOption, navbarOptionIndex) => (
                        <Link href={navbarOption?.path} key={navbarOptionIndex}>
                            <Paragraph className="hover:text-gray-400">{navbarOption?.title}</Paragraph>
                        </Link>
                    ))}
                    <Button className="bg-white text-gray-900 hover:bg-gray-200">
                        {"Apply for batches"}
                    </Button>
                </Container>
                <Container className="flex flex-row items-center justify-end gap-6">
                    {[
                        { icon: <FaDiscord />, path: "https://discord.gg/AxRzNSQRu9" },
                        { icon: <FaTwitter />, path: "https://twitter.com/hekorscommunity" },
                        { icon: <FaGithub />, path: "https://github.com/hekors" }
                    ]?.map((socialLink, socialLinkIndex) => (
                        <Link href={socialLink?.path} key={socialLinkIndex} className="text-gray-500 text-xl hover:text-gray-400" target={"_blank"}>
                            {socialLink?.icon}
                        </Link>
                    ))}
                </Container>
            </Container>
        </Container>
    )
};

export default Navbar;