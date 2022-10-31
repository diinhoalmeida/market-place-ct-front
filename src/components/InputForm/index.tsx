import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {};

const InputForm = (props: InputProps) => {
    return (
        <input type={props.type} placeholder={props.placeholder} className="bg-white shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none" id={props.id} name={props.name}/>
    )
}

export default InputForm;