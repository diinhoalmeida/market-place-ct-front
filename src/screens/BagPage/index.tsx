import { Trash } from "phosphor-react";
import { CardBagPage, Footer, Header } from "../../components";
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
                        <CardBagPage />
                        <CardBagPage />
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