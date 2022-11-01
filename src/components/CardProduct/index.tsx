import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface CardProdutProps extends HTMLAttributes<HTMLDivElement>{};

interface CardProdutProps {
    nameItem: string;
    priceItem: number;
    idItem: string;
    urlBanner: string;
}

const CardProduct = (props: CardProdutProps) => {
    const navigate = useNavigate();

    const handleOpenProductDetails = () => {
        navigate(`/productpage/${props.idItem}`);
        window.location.reload();
    }

    return (
        <div className={props.className} onClick={() => handleOpenProductDetails()}>
            <img src={`${props.urlBanner}`} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="object-contain rounded-xl"/>
            <div className="flex flex-col py-2">
                <h2 className="text-center text-red-900 text-lg font-bold">{props.nameItem}</h2>
                <p className="text-center text-slate-900 text-sm font-bold">R${props.priceItem}</p>
            </div>
        </div>
    )
}

export default CardProduct;