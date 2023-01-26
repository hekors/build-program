import { GenericComponentType } from "@/types/generic-type";

const SectionContainer: React.FunctionComponent<GenericComponentType> = ({
    children,
    style,
    className,
    id
}, props: any) => {
    return (
        <div className="section-container py-16">
            <div
                className={`section-content-container w- ${className || ""}`}
                style={style}
                id={id}
                {...props}
            >
                {children}
            </div>
        </div>
    )
};

export { SectionContainer };