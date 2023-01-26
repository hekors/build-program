import { ParagraphType } from "@/types/UIComponentTypes/typography-types";

const Paragraph: React.FunctionComponent<ParagraphType> = ({
    children,
    style,
    className="",
    id
}, props: any) => {
    return (
        <p
            className={`text-gray-500 font-medium ${className}`}
            style={style}
            id={id}
            {...props}
        >
            {children}
        </p>
    )
};

export default Paragraph;