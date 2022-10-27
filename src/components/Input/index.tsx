import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {};

const Input = (props: InputProps) => {
    return (
        <input 
            {...props}
            className="bg-zinc-900 py-3 px-4 w-full rounded-lg text-sm hover:text-zinc-500"
        />
    )
}

export default Input;