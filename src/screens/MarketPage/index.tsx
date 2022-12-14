import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Footer, Header, CardProduct } from '../../components/index';
import axios from "axios";

interface Filter {
    all: boolean;
    tea: boolean;
    coffee: boolean;
}

const MarketPage = () => {
    const [selectFilterAside, setSelectFilterAside] = useState<Filter>({
        all: true,
        coffee: true,
        tea: true
    });
    const [productsData, setProductsData] = useState([]);
    const [originalState, setOriginalState] = useState([]);

    const handleASideFilter = (checked: boolean, type: string) => {
        var filterAside = {...selectFilterAside};

        if (type === 'all') {
            filterAside.all = checked;
            filterAside.coffee = checked;
            filterAside.tea = checked;   
        } else if (type === 'tea') {
            filterAside.tea = checked;
            if (filterAside.coffee && checked) {
                filterAside.all = checked;
            } else if (!checked) {
                filterAside.all = checked;   
            }
        } else if (type === 'coffee') {
            filterAside.coffee = checked;
            if (filterAside.tea && checked) {
                filterAside.all = checked;
            } else if (!checked) {
                filterAside.all = checked; 
            }
        }
        setSelectFilterAside(filterAside);  
    }

    const handleProdutos = async () => {
        try {
            const produtosData = await axios.get('http://localhost:3000/produtos');
            setOriginalState(produtosData.data);
            setProductsData(produtosData.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleProdutos();
    }, [])

    useEffect(() => {
        if (selectFilterAside.all) {
            setProductsData(originalState);    
        } else if (selectFilterAside.tea && selectFilterAside.coffee) {
            setProductsData(originalState);    
        } else if (!selectFilterAside.tea && selectFilterAside.coffee) {
            setProductsData(originalState.filter((item: any) => item.product.name === 'cafe'));    
        } else if (selectFilterAside.tea && !selectFilterAside.coffee) {
            setProductsData(originalState.filter((item: any) => item.product.name === 'cha'));    
        } else if (!selectFilterAside.all) {
            setProductsData([]);
        }
    }, [selectFilterAside])

    return (
        <div className="w-screen flex justify-center px-14 min-h-screen">
            <div className="flex flex-col xl:w-[1280px] w-full justify-between h-full">
                <Header />
                <div className="w-full h-[400px] overflow-hidden animate-[toTop_.7s_.1s_backwards] bg-white flex justify-center rounded-2xl">
                    <img src={'/banner-list-products.jpeg'} alt="coffee and tea and cups on wood table" className='object-contain w-[60%]'/>
                </div>
                <div className="flex flex-col w-full py-5 animate-[toTop_.7s_.2s_backwards]">
                    <h1 className="text-2xl font-semibold">"Ch??f??"</h1>
                    <p>
                        Al??m da ??gua, o ch?? e o caf?? s??o as duas bebidas mais apreciadas em todo o mundo. Al??m de ser um pretexto para se juntar com um amigo a ???tomar um caf?????, estas bebidas t??m imensos benef??cios na sa??de. Os gr??os de caf?? crescem em arbustos cultivados em mais de 50 pa??ses e s??o torrados para depois serem fervidos, misturados ou outra forma de prepara????o, dependendo da cultura, de forma a dar origem ?? famosa bebida escura: o caf??. J?? o ch?? ?? consumido habitualmente em folha (da planta Camellia sinensis), geralmente em infus??o. Pode ser verde, preto, vermelho ou branco, dependendo do grau de fermenta????o da folha.
                    </p>
                </div>
                <div className="flex flex-row py-10 animate-[toTop_.7s_.3s_backwards] justify-between">
                    <aside className="p-2 flex flex-col gap-5">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center gap-2">
                                <CheckBox.Root 
                                    checked={selectFilterAside.all}
                                    onClick={() => {
                                        if (selectFilterAside.all === true) {
                                            handleASideFilter(false, "all")
                                        } else {
                                            handleASideFilter(true, "all")
                                        }
                                    }}
                                    className="w-6 h-6 p-1 rounded-full bg-white"
                                >
                                    <CheckBox.Indicator>
                                    <Check 
                                        className="w-4 h-4 text-emerald-800"
                                    />
                                    </CheckBox.Indicator>
                                </CheckBox.Root>
                                <p>Todas</p>
                            </div>
                            <p className="w-max">1000 produtos</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <CheckBox.Root 
                                    checked={selectFilterAside.tea}
                                    onClick={() => {
                                        if (selectFilterAside.tea === true) {
                                            handleASideFilter(false, "tea")
                                        } else {
                                            handleASideFilter(true, "tea")
                                        }
                                    }}
                                    className="w-6 h-6 p-1 rounded-full bg-white"
                                >
                                    <CheckBox.Indicator>
                                    <Check 
                                        className="w-4 h-4 text-emerald-800"
                                    />
                                    </CheckBox.Indicator>
                                </CheckBox.Root>
                                <p>Ch??</p>
                            </div>
                            {/* <select
                                disabled={!selectFilterAside.tea}
                                name="tea"
                                id="tea"
                                className="bg-white rounded text-sm p-2 placeholder:text-zinc-500 appearance-none"
                                defaultValue="todos"
                            >
                                <option value="todos" className="">Todos</option>
                                <option value="oi">oi</option>
                            </select> */}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <CheckBox.Root 
                                    checked={selectFilterAside.coffee}
                                    onClick={() => {
                                        if (selectFilterAside.coffee === true) {
                                            handleASideFilter(false, "coffee")
                                        } else {
                                            handleASideFilter(true, "coffee")
                                        }
                                    }}
                                    className="w-6 h-6 p-1 rounded-full bg-white"
                                >
                                    <CheckBox.Indicator>
                                    <Check 
                                        className="w-4 h-4 text-emerald-800"
                                    />
                                    </CheckBox.Indicator>
                                </CheckBox.Root>
                                <p>Caf??</p>
                            </div>
                            {/* <select
                                disabled={!selectFilterAside.coffee}
                                name="coffee"
                                id="coffee"
                                className="bg-white rounded text-sm p-2 placeholder:text-[#750204] appearance-none"
                                defaultValue="todos"
                            >
                                <option value="todos">Todos</option>
                                <option value="oi">oi</option>
                            </select> */}
                        </div>
                    </aside>
                    <div className="grid grid-cols-2 min-800:grid-cols-3 min-970:grid-cols-4 min-1105:grid-cols-5 gap-4 p-2">
                        {productsData.map((item: any, index: number) => (
                            <CardProduct 
                                key={index}
                                urlBanner={item.photoUrl}
                                idItem={item.id}
                                nameItem={item.name}
                                priceItem={item.price}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MarketPage;