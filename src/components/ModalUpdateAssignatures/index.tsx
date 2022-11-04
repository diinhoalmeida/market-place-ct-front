import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Assinaturas, CardSignature } from "..";
import { ProfileDataProps } from "../../screens/ProfilePage";
import ButtonConfirm from "../ButtonConfirm";
import axios from "axios";

interface ModalUpdateSignatureProps {
    setOpenModalupdateAssignature: (arg: boolean) => void;
    profileData: ProfileDataProps;
    signatures: string[];
    idUser: string;
}

interface Constants {
    imageCard: string;
    type: 'cha'  | 'cafe';
}

const constants: Constants[] = [
    {
        imageCard: "/cha-assinatura.jpeg",
        type: "cha"
    },
    {
        imageCard: "/coffee-assinatura.jpeg",
        type: "cafe"
    }
]

const ModalUpdateSignature = (props: ModalUpdateSignatureProps) => {
    const [signatureArray, setSignatureArray] = useState<string[]>(props.signatures);

    useEffect(() => {
        const close = (e: any) => {
          if(e.keyCode === 27){
            props.setOpenModalupdateAssignature(false)
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    const handleUpdateSignaturesApi = async () => {
        try {
            await axios.patch(`http://localhost:3000/updatesignatures/${props.idUser}`, {
                signature: signatureArray
            })

            alert('Assinaturas atualizadas!')
            window.location.reload();
        } catch (err) {
            alert('Erro ao alterar assinatura');
        }
    }

    return (
        <div className="bg-black/60 flex items-center justify-center w-screen h-screen fixed">
            <div className="flex flex-col rounded-none bg-white w-full min-600:w-[700px] p-4 h-full min-600:h-min min-600:rounded-2xl overflow-y-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold m-0">Atualizar Assinaturas</h1>
                    <X size={22} className="hover:hover:scale-[1.1] transition-transform cursor-pointer" onClick={() => props.setOpenModalupdateAssignature(false)}/>
                </div>
                <div className="grid grid-cols-1 min-600:grid-cols-2 gap-4 border-y pb-4 border-[rgba(0, 0, 0, 0.16)]">
                    {constants.map((item, index:number) => (
                        <div key={index}>
                            <CardSignature imageCard={item.imageCard} profileData={props.profileData} type={item.type}/>
                            <Assinaturas signatureArray={signatureArray} setSignatureArray={setSignatureArray} type={item.type}/>
                        </div>
                    ))}
                </div>
                <ButtonConfirm onClick={() => handleUpdateSignaturesApi()} className="hover:hover:scale-[1.05] transition-transform bg-[#E29279] py-2 px-4 rounded-lg text-white">
                    Atualizar
                </ButtonConfirm>
            </div>
        </div>
    )
}

export default ModalUpdateSignature;