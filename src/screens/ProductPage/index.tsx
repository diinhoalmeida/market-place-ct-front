import { Check, Heart } from "phosphor-react";
import * as CheckBox from '@radix-ui/react-checkbox';
import { CardProduct, Footer, Header } from "../../components";
import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { ProfileDataProps } from "../ProfilePage";
import Context from "../../context/context";
import { FormatCurrency } from "../../utils/formatCurrency";

export interface ProductDataProps {
    id: string,
    description: string,
    name: string,
    photoUrl: string,
    price: number,
    typeProduct: string,
    region: string,
    sugestion: string,
    product: BaseProducts
}

type BaseProducts = {
    id: string;
    baseId: string;
    name: string;
  }

const ProductPage = () => {
    const [selectPriceProduct, setSelectPriceProduct] = useState<string>('cha_standard');
    const [productData, setProductData] = useState<ProductDataProps>({} as ProductDataProps);
    const [qtd, setQtd] = useState<string>('1');
    const [priceProduct, setPriceProduct] = useState<string>();
    const { increaseCartQuantity, handleProfileData, handleProducts, productsData } = useContext(Context);

    let { id }: any = useParams();

    const handleProductsData = async () => {
        try {
            const getProductData = await axios.get(`http://localhost:3000/produtos/${id}`)

            setProductData(getProductData.data);
        } catch (err: any) {
            alert(err.response.data)
        }
    }

    useEffect(() => {
        const getUserId = localStorage.getItem('token');

        handleProducts();
        handleProductsData();

        if (getUserId) handleProfileData(getUserId);
    }, [])

    useEffect(() => {
        setPriceProduct(FormatCurrency(productData.price * Number(qtd)));
    }, [productData])

    return (                                                                            
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <Header />
                <div className="bg-white w-full p-4 rounded-2xl mb-10">
                    <div className="grid grid-areas-md-grid min-970:grid-areas-lg-grid min-1105:grid-areas-xl-grid gap-4 grid-cols-1 min-1105:grid-cols-3 min-970:grid-cols-2 pb-10">
                        <div className="flex min-1275:flex-row min-1275:justify-start justify-center grid-in-product">
                            <img src={`${productData.photoUrl}`} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="max-w-[300px] max-h-[300px] rounded-xl"/>
                        </div>
                        <div className="flex flex-col gap-4 grid-in-data justify-between">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-sm text-zinc-400 m-0">Novo | 15 vendidos</p>
                                <Heart size={20} />
                            </div>
                            <h1 className="text-xl font-bold m-0">{productData.name}</h1>
                            <div>
                                <p>{priceProduct}</p>
                                <div className="flex flex-row items-center gap-3">
                                    <label htmlFor="qtd">Qtd.:</label>
                                    <input onChange={(e) => setQtd(e.target.value as any)} name="qtd" id="qtd" className="bg-white shadow-box-shadow-card-product-page rounded text-sm p-2 placeholder:text-zinc-500 appearance-none w-[60px]" min={1} type="number" placeholder="1" />
                                </div>
                            </div>
                            <button className="bg-purple-600 rounded-lg py-2 text-white hover:bg-purple-700 hover:hover:scale-[1.05] transition-transform" onClick={() => increaseCartQuantity(productData.id, qtd)}>Adicionar ao Carrinho</button>
                            <div className="grid grid-rows-3 gap-4">
                                <div className={`flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] transition-transform`}>
                                    <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                                        <CheckBox.Root 
                                            disabled
                                            checked={selectPriceProduct === 'cha_standard'}
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
                                        <p>{FormatCurrency(productData.price * Number(qtd))}</p>
                                    </div>
                                </div>
                                <div className={`flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] transition-transform`}>
                                    <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                                        <CheckBox.Root 
                                            disabled
                                            checked={selectPriceProduct === 'cha_mensal'}
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
                                        <p>{FormatCurrency((productData.price * Number(qtd)) - (productData.price * Number(qtd)) * (15/100))}</p>
                                    </div>
                                </div>
                                <div className={`flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] transition-transform`}>
                                    <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                                        <CheckBox.Root 
                                            disabled
                                            checked={selectPriceProduct === 'cha_semanal'}
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
                                        <p className="text-sm text-zinc-400 m-0">Assine e economize 10%</p>
                                        <p className="text-sm text-zinc-400 m-0">Valor cobrado semanalmente</p>
                                        <p>{FormatCurrency((productData.price * Number(qtd)) - (productData.price * Number(qtd)) * (10/100))}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 grid-in-indications justify-between">
                            <h2 className="text-xl font-bold">Quem viu este produto também comprou</h2>
                            <div className="grid min-1105:grid-cols-2 w-ful grid-cols-4 min-1105:grid-rows-2 gap-5">
                            {[...Array(4)].map((item: any, index:number) => (
                                <CardProduct 
                                    urlBanner={productsData[index]?.photoUrl}
                                    idItem={productsData[index]?.id}
                                    nameItem={productsData[index]?.name}
                                    priceItem={productsData[index]?.price}
                                />
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-[rgba(0, 0, 0, 0.16)] p-4">
                        <div>
                            <h1 className="text-xl font-bold">Descrição</h1>
                            <p>{productData?.description}</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Região de Crescimento</h1>
                            <p>{productData?.region}</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Sugestão</h1>
                            <p>{productData?.sugestion}</p>
                        </div>
                    </div>
                </div> 
                <Footer />   
            </div>
        </div>
    )  
}

export default ProductPage;