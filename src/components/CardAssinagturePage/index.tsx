interface CardBagPageProps {
    activeQtd?: boolean;
    imageCard?: string;
}

const CardAssignature = (props: CardBagPageProps) => {
    return (
        <div className="flex flex-row w-full justify-between items-center py-2 border-b border-[rgba(0, 0, 0, 0.16)]">
            <div className="flex flex-row items-center gap-4">
                <img src={`${props.imageCard}`} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl object-cover"/>
                <div>
                    <h1>Chá</h1>
                    <p>Compra Padrão</p>
                </div>
            </div>
            <p>R$17,00</p>
        </div>
    )
}

export default CardAssignature;