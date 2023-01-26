import { HeadlineType } from "@/types/UIComponentTypes/typography-types";

const Headline: React.FunctionComponent<HeadlineType> = ({
    children,
    size="lg",
    style,
    className,
    id,
}, props: any) => {
    return (
        <h1
            className={`text-${size} text-gray-900 ${className || ""}`}
            style={style}
            id={id}
            {...props}
        >
            {children}
        </h1>
    )
};

export default Headline;