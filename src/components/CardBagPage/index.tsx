import { Trash } from "phosphor-react";

interface CardBagPageProps {
    activeQtd?: boolean;
    imageCard?: string;
}

const CardBagPage = (props: CardBagPageProps) => {
    return (
        <div className="flex flex-row w-full justify-between items-center py-2 border-b border-[rgba(0, 0, 0, 0.16)]">
            <div className="flex flex-row items-center gap-4">
                <img src={`${props.imageCard}`} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl object-cover"/>
                <div>
                    <h1>Chá</h1>
                    <p>Compra Padrão</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <label htmlFor="qtd">Qtd.:</label>
                <input disabled={props.activeQtd} name="qtd" id="qtd" className="bg-white shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none w-[60px]" min={1} type="number" defaultValue={1}/>
            </div>
            <p>R$17,00</p>
            <button className="flex items-center justify-center rounded-lg bg-rose-700 p-2 hover:hover:scale-[1.05] transition-transform">
                <Trash size={20} color="white"/>
            </button>
        </div>
    )
}

export default CardBagPage;