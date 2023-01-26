import { HeadlineType } from "@/types/UIComponentTypes/typography-types";

const Headline: React.FunctionComponent<HeadlineType> = ({
    children,
    style,
    className="",
    id,
}, props: any) => {
    return (
        <h1
            className={` ${className}`}
            style={style}
            id={id}
            {...props}
        >
            {children}
        </h1>
    )
};

export default Headline;