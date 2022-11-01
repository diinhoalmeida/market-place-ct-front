import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import { ProfileDataProps } from "../screens/ProfilePage";
import axios from "axios";
import { FormatCurrency } from "../utils/formatCurrency";
import { ProductDataProps } from "../screens/ProductPage";

type Props = {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

type ShoppingCartContextProps = {
  increaseCartQuantity: (id: string, qtd: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  cartItems: CartItem[]
  cartQuantity: number
  handleProfileData: (arg: string) => void;
  profileData: ProfileDataProps;
  signature: Signature;
  handleProducts: () => void;
  productsData: ProductDataProps[];
  totalValueBuy: string;
  totalValue: () => void;
}

type CartItem = {
  id: string,
  quantity: string
}
type Signature = {
  coffee: number;
  cha: number;
}

const Context = createContext<ShoppingCartContextProps>({} as ShoppingCartContextProps);

const ContextProvider = (props: Props) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const [profileData, setProfileData] = useState<ProfileDataProps>({} as ProfileDataProps);
  const [signature, setSignature] = useLocalStorage<Signature>("signature", {} as Signature);
  const [productsData, setProductsData] = useState<ProductDataProps[]>([] as ProductDataProps[]);
  const [totalValueBuy, setTotalValueBuy] = useState<string>('R$0,00');

  const cartQuantity = cartItems.length;

  const increaseCartQuantity = (id: string, qtd: string) => {
    setCartItems((currItems): any => {
        if (currItems.find(item => item.id === id) === undefined) {
            return [...currItems, {id, quantity: 1}];
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: parseInt(item.quantity) + parseInt(qtd)}
                } 
                return item;
            })
        }
    })
}

const decreaseCartQuantity = (id: string) => {
    setCartItems((currItems): any => {
        if (currItems.find(item => item.id === id)?.quantity === '1') {
            return currItems.filter(item => item.id !== id);
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: parseInt(item.quantity) - 1}
                } else {
                    return item
                }
            })
        }
    })
}

const removeFromCart = (id: string) => {
    setCartItems(currlItems => {
        return currlItems.filter(item => item.id !== id);
    })
}

const handleProfileData = async (getUserId: string) => {
  try {
    const getProfileData = await axios.get(`http://localhost:3000/conta/${getUserId}/dados`)
    
    signatureFilter(getProfileData.data.signature);
    setProfileData(getProfileData.data);
  } catch (err: any) {
    alert(err.response.data)
  }
}

const signatureFilter = async (arg: string[]) => {
  var signatureSpread = {...signature};

  signatureSpread.cha = 0;
  signatureSpread.coffee = 0;
  if (!arg) {
    return;
  } else {
    if (arg.includes('b2d11344-fac4-4fd5-b0d7-e680c3ecfdd3')) {
      signatureSpread.cha = 15;
    } else if (arg.includes('a831e552-15aa-497a-aaff-a9f8abe7be1a')) {
      signatureSpread.cha = 10;
    }

    if (arg.includes('bbb5802e-5fb7-4382-9385-298ea6c482f6')) {
      signatureSpread.coffee = 15;
    } else if (arg.includes('b21924e4-30c5-4e42-91b5-17d75a22d3e7')) {
      signatureSpread.coffee = 10;
    }
  }

  setSignature(signatureSpread);
}

const handleProducts = async () => {
  try {
      const produtosData = await axios.get('http://localhost:3000/produtos');

      setProductsData(produtosData.data);
  } catch (err) {
      console.log(err);
  }
}

const totalValue = async () => {
  if (cartItems.length > 0 && productsData.length > 0) {
    const originalValue = cartItems?.reduce((total, cartItem: any) => {
        const itemToMap: any = productsData.find(i => i.id === cartItem.id)
        return total + (itemToMap?.price || 0) * cartItem.quantity
    }, 0);
    const value = cartItems?.reduce((total, cartItem: any) => {
        const itemToMap: any = productsData.find(i => i.id === cartItem.id)
        console.log(itemToMap?.product.name)
        if (itemToMap?.product.name === 'cha') {
          console.log('entrou aqui')
          return total + ((itemToMap?.price - (itemToMap?.price * (signature.cha/100) || 0))) * cartItem?.quantity
        }
        return total + ((itemToMap?.price - (itemToMap?.price * (signature.coffee/100) || 0))) * cartItem?.quantity
    }, 0);
    localStorage.setItem('valueTotal', FormatCurrency(value));
    localStorage.setItem('originalValue', FormatCurrency(originalValue));
    setTotalValueBuy(FormatCurrency(value));
  }
  setTotalValueBuy(FormatCurrency(0));
}

useEffect(() => {
  totalValue();
}, [cartItems])

  return (
    <Context.Provider
      value={{
        totalValueBuy,
        totalValue,
        cartItems,
        cartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        handleProfileData,
        profileData,
        signature,
        handleProducts,
        productsData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { ContextProvider };
export default Context;