const CardProduct = () => {
    return (
        <div className="w-[200px] overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform animate-[toTop_.7s_.2s_backwards]">
            <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="object-contain rounded-xl"/>
            <div className="flex flex-col py-2">
                <h2 className="text-center text-red-900 text-lg font-bold">Chá</h2>
                <p className="text-center text-slate-900 text-sm font-bold">R$12.00 - R$18.00</p>
            </div>
        </div>
    )
}

export default CardProduct;