import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface SingatureProps {
    type: "cha"  | "cafe";
    signatureArray: string[];
    setSignatureArray?: (arg: string[]) => void;
    page?: "product_page";
}

const Assinaturas = (props: SingatureProps) => {
    const handleCheckedBoxStandardOption = (arg: 'cha'  | 'cafe') => {
        var isChecked = false;

        if (arg === 'cha') {
            if (!props.signatureArray.includes("cha_mensal") && !props.signatureArray.includes("cha_semanal")) isChecked = true;
        } else {
            if (!props.signatureArray.includes("cafe_mensal") && !props.signatureArray.includes("cafe_semanal")) isChecked = true;    
        }

        return isChecked;
    }

    const handleCheckedBoxSignatureMonthly = (arg: 'cha'  | 'cafe') => {
        var isChecked = false;

        if (arg === 'cha') {
            if (props.signatureArray.includes("cha_mensal")) isChecked = true;
        } else {
            if (props.signatureArray.includes("cafe_mensal")) isChecked = true;
        }

        return isChecked;
    }

    const handleCheckedBoxSignatureWeekly = (arg: 'cha'  | 'cafe') => {
        var isChecked = false;

        if (arg === 'cha') {
            if (props.signatureArray.includes("cha_semanal")) isChecked = true;
        } else {
            if (props.signatureArray.includes("cafe_semanal")) isChecked = true;
        }

        return isChecked;
    }

    const handleUpdateSignatures = (arg: 'cha'  | 'cafe', signature: 'standard_cafe' | 'standard_cha' | 'cafe_mensal' | 'cafe_semanal' | 'cha_mensal' | 'cha_semanal') => {
        var signatureSpread = [...props.signatureArray];
        
        if (arg === 'cha') {
            var indexOf = 0;

            signatureSpread.map((item: any, index: number) => {
                if (item.indexOf('cha') !== -1) {
                    indexOf = index;
                    return
                } else {
                    return;
                };
            });

            if (signatureSpread[indexOf]) {
                signatureSpread.splice(signatureSpread.indexOf(signatureSpread[indexOf]), 1, signature)    
            }

            if (props.setSignatureArray) props.setSignatureArray(signatureSpread);
        } else if (arg === 'cafe') {
            var indexOf = 0;

            signatureSpread.map((item: any, index: number) => {
                if (item.indexOf('cafe') !== -1) {
                    indexOf = index;
                    return
                } else {
                    return;
                };
            });
            
            if (signatureSpread[indexOf]) {
                signatureSpread.splice(signatureSpread.indexOf(signatureSpread[indexOf]), 1, signature)    
            }

            if (props.setSignatureArray) props.setSignatureArray(signatureSpread);
        }
        
    }

    return (
        <div className="grid grid-rows-3 gap-4">
            <div onClick={() => !props.page && handleUpdateSignatures(props.type, `standard_${props.type}`)} className={`flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] ${!props.page && 'cursor-pointer'} transition-transform`}>
                <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                    <CheckBox.Root 
                        checked={handleCheckedBoxStandardOption(props.type)}
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
                    <h3>Compra Padrão</h3>
                </div>
            </div>
            <div onClick={() => !props.page && handleUpdateSignatures(props.type, `${props.type}_mensal`)} className={`flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] ${!props.page && 'cursor-pointer'} transition-transform`}>
                <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                    <CheckBox.Root 
                        checked={handleCheckedBoxSignatureMonthly(props.type)}
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
                    <h3>{props.type === 'cha' ? "Chá" : "Café"} do Mês</h3>
                    <p className="text-sm text-zinc-400 m-0">Assine e economize 15%</p>
                    <p className="text-sm text-zinc-400 m-0">Valor cobrado mensalmente</p>
                    <p>R$15</p>
                </div>
            </div>
            <div onClick={() => !props.page && handleUpdateSignatures(props.type, `${props.type}_semanal`)} className={`flex flex-row p-3 rounded-lg shadow-box-shadow-card-product-page gap-4 items-center hover:scale-[1.05] ${!props.page && 'cursor-pointer'} transition-transform`}>
                <div className="flex justify-center items-center w-[15%] border-r border-[rgba(0, 0, 0, 0.16)]">
                    <CheckBox.Root 
                        checked={handleCheckedBoxSignatureWeekly(props.type)}
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
                    <h3>{props.type === 'cha' ? "Chá" : "Café"} Semanal</h3>
                    <p className="text-sm text-zinc-400 m-0">Assine e economize 10%</p>
                    <p className="text-sm text-zinc-400 m-0">Valor cobrado semanalmente</p>
                    <p>R$10</p>
                </div>
            </div>
        </div>
    )
}

export default Assinaturas;