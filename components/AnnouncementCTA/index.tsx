import { WrappedContainer } from "@/components/UIComponents/Container/WrappedContainer";
import Container from "@/components/UIComponents/Container";
import { GenericComponentType } from "@/types/generic-type";
import { FaInfoCircle } from "react-icons/fa";
import Paragraph from "../UIComponents/Typography/Paragraph";

const AnnouncementCTA: React.FunctionComponent<GenericComponentType> = ({
    children,
    style,
    id,
    className
}, props: any) => {
    return (
        <WrappedContainer className={`announcement-cta h-fit min-h-[120px] max-h-[200px] w-fit min-w-[400px] max-w-[600px]
            rounded-md bg-gray-800 p-6 transition-all hover:-translate-y-2 
            cursor-default flex flex-row items-start justify-start gap-4 ${className}`}
            {...props}
            style={style}
            id={id}
        >
            <Container className="announcement-cta__icon flex flex-col items-center justify-start">
                <FaInfoCircle className="text-lg text-gray-400" />
            </Container>
            <Container className="announcement-cta__content-wrapper">
                <Paragraph className="text-gray-400 font-medium text-base">
                    {children}
                </Paragraph>
            </Container>
        </WrappedContainer>
    )
};

export default AnnouncementCTA;