import { ParagraphType } from "@/types/UIComponentTypes/typography-types";

const Paragraph: React.FunctionComponent<ParagraphType> = ({
    children,
    size="base",
    style,
    className,
    id
}, props: any) => {
    return (
        <p
            className={`text-${size} text-gray-500 font-medium ${className || ""}`}
            style={style}
            id={id}
            {...props}
        >
            {children}
        </p>
    )
};

export default Paragraph;