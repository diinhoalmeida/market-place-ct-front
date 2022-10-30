import { HTMLAttributes } from "react";

interface CardProductAtributes extends HTMLAttributes<HTMLDivElement>{};

const CardProduct = (props: CardProductAtributes) => {
    return (
        <div className={props.className}>
            <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="object-contain rounded-xl"/>
            <div className="flex flex-col py-2">
                <h2 className="text-center text-red-900 text-lg font-bold">Chá</h2>
                <p className="text-center text-slate-900 text-sm font-bold">R$12.00 - R$18.00</p>
            </div>
        </div>
    )
}

export default CardProduct;