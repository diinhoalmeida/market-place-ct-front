import { useEffect, useState } from 'react';
import { Footer, Header, CardProduct } from '../../components/index';
import { ProductDataProps } from '../ProductPage';
import axios from "axios";

const HomePage = () => {
    const [productsData, setProductsData] = useState<ProductDataProps[]>([]);

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
    }, [])

    return (
        <div className="w-screen flex justify-center px-14 min-h-screen">
            <div className="flex flex-col xl:w-[1280px] w-full justify-between h-full">
                <Header />
                <div className="w-full h-[400px] overflow-hidden animate-[toTop_.7s_.1s_backwards] rounded-2xl">
                    <img src={'/image-home.jpeg'} alt="coffee and tea and cups on wood table" className='object-fill'/>
                </div>
                <div className="flex flex-col gap-2 pt-10">
                    <h1 className="text-center text-3xl">NOSSOS PRODUTOS</h1>
                    <h4 className="text-center">O MELHOR PARA OS MELHORES!</h4>
                </div>
                <div className="grid grid-cols-2 min-600:grid-cols-3 min-800:grid-cols-4 min-970:grid-cols-5 min-1105:grid-cols-6 gap-4 pt-10 animate-[toTop_.7s_.2s_backwards]">
                    {productsData.map(item => (
                        <CardProduct 
                        urlBanner={item.photoUrl}
                        idItem={item.id}
                        className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"
                        nameItem={item.name}
                        priceItem={item.price}
                    />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;