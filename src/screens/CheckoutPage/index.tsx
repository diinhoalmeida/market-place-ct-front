import { FormEvent } from "react";
import { Footer, Header } from "../../components";
import ButtonConfirm from "../../components/ButtonConfirm";
import InputForm from "../../components/InputForm";

const CheckoutPage = () => {
    const handleFormBuy = (event: FormEvent) => {
        event.preventDefault();
    
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        console.log(data);
    }

    return (
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <Header />
                <div className="w-full grid grid-areas-md-grid-checkout-page min-800:grid-areas-xl-grid-checkout-page gap-10">
                    <form onSubmit={handleFormBuy} className="bg-white rounded-2xl h-min grid-in-form">
                        <div className="p-4 min-800:order-2 order-1 flex flex-col gap-4 border-b border-[rgba(0, 0, 0, 0.16)]">
                            <h1 className="text-xl font-bold m-0">
                                Finalizar Compra
                            </h1>
                            <div className="flex flex-col">
                                <label htmlFor="name">Nome Completo</label>
                                <InputForm type="text" id="name" name="name" />
                                <span className="text-sm text-zinc-400 m-0">Como aparecem no seu Rg ou CNH.</span>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="cep">CEP</label>
                                <InputForm id="cep" name="cep" type="text"  />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="estado">Estado</label>
                                    <InputForm id="estado" name="estado" type="text"  />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="cidade">Cidade</label>
                                    <InputForm id="cidade" name="cidade" type="text"  />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="bairro">Bairro</label>
                                    <InputForm id="bairro" name="bairro" type="text"  />    
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="rua">Rua/Avenida</label>
                                    <InputForm id="rua" name="rua" type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="numero-casa">Número</label>
                                    <InputForm id="numero-casa" name="numero-casa" type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="telefone">Telefone de Contato</label>
                                    <InputForm id="telefone" name="telefone" type="text" />    
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor="infos">Indicações adicionais para entregar suas compras neste endereço. (opcional)</label>
                                <textarea id="infos" name="infos" className="bg-white w-full shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none" placeholder="Casa de portão prata, muro branco, numero 28 na parede." />    
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file" className="form-label">Anexar Documento</label>
                                <input type="file" id="file" name="file" accept="application/pdf" />
                            </div>
                        </div>
                        <div className="w-full min-800:order-2 order-1 flex justify-end items-center p-4">
                            <ButtonConfirm className="hover:hover:scale-[1.05] transition-transform bg-[#E29279] py-2 px-4 rounded-lg text-white">
                                Finalizar Compra
                            </ButtonConfirm>
                        </div>
                    </form>
                    <div className="grid grid-cols-2 grid-in-details min-800:flex min-800:flex-col">
                        <div className="p-4">
                            <h1 className="text-xl font-bold m-0">Resumo de Compra</h1>
                            <div className="border-b border-t border-[rgba(0, 0, 0, 0.16)] py-4 my-2">
                                <div className="flex justify-between items-center">
                                    <p>Produtos(6)</p>
                                    <p>R$50,50</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Você pagará</p>
                                <p>R$50,50</p>
                            </div>
                        </div>
                        <img src="/checkout-buy-page.jpeg" alt="" className="object-cover block rounded-2xl"/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default CheckoutPage;