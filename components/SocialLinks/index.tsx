import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Container from "../UIComponents/Container";

const SocialLinks = () => {
    return (
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
    )
};

export default SocialLinks;