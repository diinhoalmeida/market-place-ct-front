import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { FormatCurrency } from "../../utils/formatCurrency";

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
        <div className="overflow-hidden shadow-box-shadow-card-product-page bg-white p-3 rounded-2xl hover:scale-[1.05] cursor-pointer transition-transform flex flex-col justify-between" onClick={() => handleOpenProductDetails()}>
            <div className="max-h-[200px] overflow-hidden">
                <img src={`${props.urlBanner}`} alt={`${props.nameItem}`} className="object-fill rounded-xl"/>
            </div>
            <div className="flex flex-col py-2 gap-1">
                <h2 className="text-center text-red-900 text-sm font-bold">{props.nameItem}</h2>
                <p className="text-center text-slate-900 text-sm font-bold">{FormatCurrency(props.priceItem)}</p>
            </div>
        </div>
    )
}

export default CardProduct;