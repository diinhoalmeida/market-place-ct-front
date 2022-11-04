import { ButtonHTMLAttributes } from "react";

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {};

const ButtonConfirm = (props: ButtonAttributes) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonConfirm;