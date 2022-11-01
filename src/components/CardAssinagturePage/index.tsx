import { ProfileDataProps } from "../../screens/ProfilePage";

interface CardBagPageProps {
    activeQtd?: boolean;
    imageCard?: string;
    profileData: ProfileDataProps;
    type: 'coffee' | 'cha';
}

const CardSignature = (props: CardBagPageProps) => {
    const handleSignatureType = (arg: string) => {
        let signature = 'Padrão';
        let val = 'R$0,00'

        if (props.profileData?.signature?.length < 0 || !props.profileData?.signature) return { signature, val };

        if (arg === 'coffee') {
            if (props.profileData?.signature?.includes('2c877b34-d743-4bb7-bcef-ada1a0dfb856')) {
                signature = 'Café Semanal';
            } else {
                signature = 'Café Mensal';
            }
        } else {
            if (props.profileData?.signature?.includes('51ca3271-5b3a-4c63-b1d8-735f86bf57e6')) {
                signature = 'Chá Semanal';
            } else {
                signature = 'Chá Mensal';
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