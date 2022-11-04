import { ProfileDataProps } from "../../screens/ProfilePage";
import { FormatCurrency } from "../../utils/formatCurrency";

interface CardBagPageProps {
    activeQtd?: boolean;
    imageCard?: string;
    profileData: ProfileDataProps;
    type: 'cafe' | 'cha';
}

const CardSignature = (props: CardBagPageProps) => {
    const handleSignatureType = (arg: string) => {
        let signature = 'Padrão';
        let val = FormatCurrency(0);

        if (props.profileData?.signature?.length < 0 || !props.profileData?.signature) return { signature, val };

        if (arg === 'cafe') {
            if (props.profileData?.signature?.includes('cafe_semanal')) {
                signature = 'Café Semanal';
                val = FormatCurrency(10);
            } else if (props.profileData?.signature?.includes('cafe_mensal')) {
                signature = 'Café Mensal';
                val = FormatCurrency(15);
            } else {
                signature = 'Café Padrão';
                val = FormatCurrency(0);
            }
        } else {
            if (props.profileData?.signature?.includes('cha_semanal')) {
                signature = 'Chá Semanal';
                val = FormatCurrency(10);
            } else if (props.profileData?.signature?.includes('cha_mensal')) {
                signature = 'Chá Mensal';
                val = FormatCurrency(15);
            } else {
                signature = 'Chá Padrão';
                val = FormatCurrency(0);
            }
        }

        return { signature, val }
    }

    const { signature, val } = handleSignatureType(props.type);

    return (
        <div className="flex flex-row w-full justify-between items-center py-2 border-b border-[rgba(0, 0, 0, 0.16)]">
            <div className="flex flex-row items-center gap-4">
                <img src={`${props.imageCard}`} alt="https://www.imperialtea.com/wp-content/uploads/2021/02/ITC3117.jpg" className="w-[70px] h-[70px] rounded-xl object-cover"/>
                <div>
                    <h1>{props.type === 'cha' ? 'Chá' : 'Café'}</h1>
                    <p>{signature}</p>
                </div>
            </div>
            <p>{val}</p>
        </div>
    )
}

export default CardSignature;