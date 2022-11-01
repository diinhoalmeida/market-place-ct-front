import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useState } from 'react';

const Assinaturas = () => {
    const [selectPriceProduct, setSelectPriceProduct] = useState('standard');

    return (
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
    )
}

export default Assinaturas;