import { X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import ButtonConfirm from "../ButtonConfirm";
import Context from "../../context/context";
import { ProductDataProps } from "../../screens/ProductPage";
import axios from "axios";
import { FormatCurrency } from "../../utils/formatCurrency";

interface DrawerComponentProps {
    openBag: boolean;
    setOpenBag: (arg: boolean) => void;
}

const DrawerComponent = (props: DrawerComponentProps) => {
    const { cartQuantity, cartItems, removeFromCart } = useContext(Context);
    const [productsData, setProductsData] = useState<ProductDataProps[]>([] as ProductDataProps[]);
    const [valueTotalBuy, setValueTotalBuy] = useState<string>(FormatCurrency(0));

    const handleProdutos = async () => {
        try {
            const produtosData = await axios.get('http://localhost:3000/produtos');
            setProductsData(produtosData.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleProdutos();
        const valueTotal = localStorage.getItem('valueTotal');
        if (valueTotal) setValueTotalBuy(valueTotal);
        const close = (e: any) => {
          if(e.keyCode === 27){
            props.setOpenBag(false)
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <div className="fixed top-0 z-40 h-full overflow-y-auto right-0 bg-white w-[500px] shadow-box-shadow-card-product-page" tabIndex={-1} aria-labelledby="drawer-label">
            <div className="flex flex-row justify-between items-center p-4">
                <h1 className="text-xl font-bold">Carrinho({cartQuantity})</h1>
                <X size={22} onClick={() => props.setOpenBag(false)} className="hover:hover:scale-[1.1] transition-transform cursor-pointer"/>
            </div>
            <div className="border-y border-[rgba(0, 0, 0, 0.16)] p-4 flex flex-col gap-2 overflow-y-auto max-h-full min-h-min">
                {cartItems?.map((item: any) => {
                    const itemToMap: ProductDataProps | undefined = productsData.find(i => i.id === item.id);
                    if (!itemToMap) return null;
                    return (
                        <div className="grid grid-cols-4 shadow-box-shadow-card-product-page p-1">
                            <img src={`${itemToMap?.photoUrl}`} alt={`${itemToMap?.name}`} className="w-[70px] h-[70px] rounded-xl"/>
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-row items-baseline gap-1">
                                    <h1 className="text-xl font-bold m-0 line-clamp-1">{itemToMap?.name}</h1>
                                    <p className="text-xs text-zinc-400 m-0">x{item.quantity}</p>
                                </div>
                                <p>{FormatCurrency(itemToMap?.price)}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <p>{FormatCurrency(itemToMap?.price * item.quantity)}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="w-8 h-8 rounded-md bg-rose-600 hover:bg-rose-700 flex justify-center items-center text-white hover:hover:scale-[1.1] transition-transform">
                                    <X size={18} onClick={() => removeFromCart(itemToMap.id)}/>
                                </button>
                            </div>
                        </div>
                    )
                })}
                </div>
            <div className="flex items-end flex-col gap-2 absolute p-4 bottom-0 w-full bg-white shadow-box-shadow-card-product-page">
                <p className="text-xl font-bold m-0">
                    Total{" "}
                    {valueTotalBuy}
                </p>
                <ButtonConfirm className="hover:hover:scale-[1.05] transition-transform bg-[#E29279] py-2 px-4 rounded-lg text-white">
                    Finalizar Compra
                </ButtonConfirm>
            </div>       
        </div>
    )
}

export default DrawerComponent;