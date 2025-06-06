import { type ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({
    type,
    size,
    shape,
    text,
    Background,
    onClick,
}) => {
return (
    <>
    <button
    type={type}
    className={`${Background} ${size} ${shape}`}
    onClick={onClick}
    >
    {text}
    </button>
    </>
);
};

export default Button;