import { Trash } from "phosphor-react";
import { Footer, Header } from "../../components";
import ButtonConfirm from "../../components/ButtonConfirm";

const BagPage = () => {
    return (
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <Header />
                <img src="/checkout-banner.jpeg" alt="checkout-banner" className="w-full rounded-2xl animate-[toTop_.7s_.2s_backwards] mb-5" />
                <div className="w-full bg-white rounded-2xl p-4 flex flex-col">
                    <h1>Carrinho (3)</h1>
                    <div className="border-t border-stone-900 w-full">
                        <div className="flex flex-row w-full justify-between items-center py-2 border-b border-[rgba(0, 0, 0, 0.16)]">
                            <div className="flex flex-row items-center gap-4">
                                <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl"/>
                                <div>
                                    <h1>Chá</h1>
                                    <p>Compra Padrão</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <label htmlFor="qtd">Qtd.:</label>
                                <input name="qtd" id="qtd" className="bg-white shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none w-[60px]" min={1} type="number" defaultValue={1}/>
                            </div>
                            <p>R$17,00</p>
                            <button className="flex items-center justify-center rounded-lg bg-rose-700 p-2 hover:hover:scale-[1.05] transition-transform">
                                <Trash size={20} color="white"/>
                            </button>
                        </div>
                        <div className="flex flex-row w-full justify-between items-center py-2 border-b border-[rgba(0, 0, 0, 0.16)]">
                            <div className="flex flex-row items-center gap-4">
                                <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl"/>
                                <div>
                                    <h1>Chá</h1>
                                    <p>Compra Padrão</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <label htmlFor="qtd">Qtd.:</label>
                                <input name="qtd" id="qtd" className="bg-white shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none w-[60px]" min={1} type="number" placeholder="1" />
                            </div>
                            <p>R$17,00</p>
                            <button className="flex items-center justify-center rounded-lg bg-rose-700 p-2 hover:hover:scale-[1.05] transition-transform">
                                <Trash size={20} color="white"/>
                            </button>
                        </div>
                        <div className="w-full flex justify-end items-center pt-4">
                            <ButtonConfirm className="bg-purple-600 rounded-lg p-2 text-white hover:bg-purple-700 hover:hover:scale-[1.05] transition-transform">
                                Finalizar Compra
                            </ButtonConfirm>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default BagPage;