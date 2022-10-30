import { Check, Heart } from "phosphor-react";
import * as CheckBox from '@radix-ui/react-checkbox';
import { CardProduct, Footer, Header } from "../../components";
import { useState } from "react";

const ProductPage = () => {
    const [selectPriceProduct, setSelectPriceProduct] = useState<string>('standard');

    return (
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <Header />
                <div className="bg-white w-full p-4 rounded-2xl mb-10">
                    <div className="grid grid-areas-md-grid min-970:grid-areas-lg-grid min-1105:grid-areas-xl-grid gap-4 grid-cols-1 min-1105:grid-cols-3 min-970:grid-cols-2 pb-10">
                        <div className="flex min-1275:flex-row min-1275:justify-start justify-between flex-col-reverse grid-in-product">
                            <div className="flex flex-row min-1275:flex-col">
                                <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl"/>
                                <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl"/>
                            </div>
                            <img src={'https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg'} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="max-w-[300px] max-h-[300px] rounded-xl"/>
                        </div>
                        <div className="flex flex-col gap-4 grid-in-data justify-between">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-sm text-zinc-400 m-0">Novo | 15 vendidos</p>
                                <Heart size={20} />
                            </div>
                            <h1 className="text-xl font-bold m-0">Nome do Produto</h1>
                            <div>
                                <p>R$15</p>
                                <div className="flex flex-row items-center gap-3">
                                    <label htmlFor="qtd">Qtd.:</label>
                                    <input name="qtd" id="qtd" className="bg-white shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none w-[60px]" min={1} type="number" placeholder="1" />
                                </div>
                            </div>
                            <button className="bg-purple-600 rounded-lg py-2 text-white hover:bg-purple-700 hover:hover:scale-[1.05] transition-transform">Adicionar ao Carrinho</button>
                            <div className="grid grid-rows-3 gap-4">
                                <div className="flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] cursor-pointer transition-transform">
                                    <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                                        <CheckBox.Root 
                                            checked={selectPriceProduct === 'standard'}
                                            className="w-6 h-6 p-1 rounded-full bg-[#EBEBEB]"
                                        >
                                            <CheckBox.Indicator>
                                            <Check 
                                                className="w-4 h-4 text-emerald-800"
                                            />
                                            </CheckBox.Indicator>
                                        </CheckBox.Root>    
                                    </div>
                                    <div>
                                        <h3>Compra Única</h3>
                                        <p>R$12</p>
                                    </div>
                                </div>
                                <div className="flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] cursor-pointer transition-transform">
                                    <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                                        <CheckBox.Root 
                                            checked={selectPriceProduct === 'standard'}
                                            className="w-6 h-6 p-1 rounded-full bg-[#EBEBEB]"
                                        >
                                            <CheckBox.Indicator>
                                            <Check 
                                                className="w-4 h-4 text-emerald-800"
                                            />
                                            </CheckBox.Indicator>
                                        </CheckBox.Root>    
                                    </div>
                                    <div>
                                        <h3>Chá do Mês</h3>
                                        <p className="text-sm text-zinc-400 m-0">Assine e economize 15%</p>
                                        <p className="text-sm text-zinc-400 m-0">Valor cobrado mensalmente</p>
                                        <p>R$12</p>
                                    </div>
                                </div>
                                <div className="flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] cursor-pointer transition-transform">
                                    <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                                        <CheckBox.Root 
                                            checked={selectPriceProduct === 'standard'}
                                            className="w-6 h-6 p-1 rounded-full bg-[#EBEBEB]"
                                        >
                                            <CheckBox.Indicator>
                                            <Check 
                                                className="w-4 h-4 text-emerald-800"
                                            />
                                            </CheckBox.Indicator>
                                        </CheckBox.Root>    
                                    </div>
                                    <div>
                                        <h3>Chá Semanal</h3>
                                        <p className="text-sm text-zinc-400 m-0">Assine e economize 20%</p>
                                        <p className="text-sm text-zinc-400 m-0">Valor cobrado semanalmente</p>
                                        <p>R$10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 grid-in-indications justify-between">
                            <h2 className="text-xl font-bold">Quem viu este produto também comprou</h2>
                            <div className="grid min-1105:grid-cols-2 w-ful grid-cols-4 min-1105:grid-rows-2 gap-5">
                                <CardProduct className="overflow-hidden bg-white p-3 rounded-lg shadow-box-shadow-card-product-page hover:scale-[1.1] cursor-pointer transition-transform"/>
                                <CardProduct className="overflow-hidden bg-white p-3 rounded-lg shadow-box-shadow-card-product-page hover:scale-[1.1] cursor-pointer transition-transform"/>
                                <CardProduct className="overflow-hidden bg-white p-3 rounded-lg shadow-box-shadow-card-product-page hover:scale-[1.1] cursor-pointer transition-transform"/>
                                <CardProduct className="overflow-hidden bg-white p-3 rounded-lg shadow-box-shadow-card-product-page hover:scale-[1.1] cursor-pointer transition-transform"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-[rgba(0, 0, 0, 0.16)] p-4">
                        <div>
                            <h1 className="text-xl font-bold">Descrição</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum, eligendi, consectetur obcaecati vero libero unde necessitatibus nulla, iusto quidem laboriosam. Ratione omnis suscipit, eius doloremque numquam quod odit ut.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Região de Crescimento</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum, eligendi, consectetur obcaecati vero libero unde necessitatibus nulla, iusto quidem laboriosam. Ratione omnis suscipit, eius doloremque numquam quod odit ut.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Sugestão de Preparação</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum, eligendi, consectetur obcaecati vero libero unde necessitatibus nulla, iusto quidem laboriosam. Ratione omnis suscipit, eius doloremque numquam quod odit ut.</p>
                        </div>
                    </div>
                </div> 
                <Footer />   
            </div>
        </div>
    )  
}

export default ProductPage;