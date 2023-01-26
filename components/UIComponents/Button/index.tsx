import { ButtonType } from "@/types/UIComponentTypes/button-type";
import Link from "next/link";

const Button: React.FunctionComponent<ButtonType> = ({
    children,
    size="medium",
    variant="solid",
    type="button",
    className="",
    style,
    id,
    onClick,
    link
}, props: any) => {

    if (link && link?.externalURL) {
        return (
            <Link href={link?.externalURL} target={link?.target || "_blank"}>
                <button 
                    className={`bp-button bp-button-size-${size} bp-button-variant-${variant} ${className}`}
                    id={id}
                    type={type}
                    onClick={onClick}
                    style={style}
                    {...props}
                >
                    {children}
                </button>
            </Link>
        )
    } else if (link && link?.path) {
        return (
            <Link href={link?.path} target={link?.target}>
                <button 
                    className={`bp-button bp-button-size-${size} bp-button-variant-${variant} ${className}`}
                    id={id}
                    type={type}
                    onClick={onClick}
                    style={style}
                    {...props}
                >
                    {children}
                </button>
            </Link>
        )
    } else {
        return (
            <button 
                className={`bp-button bp-button-size-${size} bp-button-variant-${variant} ${className}`}
                id={id}
                type={type}
                onClick={onClick}
                style={style}
                {...props}
            >
                {children}
            </button>
        )
    }
};

export default Button;