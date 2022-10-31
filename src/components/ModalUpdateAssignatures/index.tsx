import { X } from "phosphor-react";
import { useEffect } from "react";
import { Assinaturas, CardAssignature } from "..";
import ButtonConfirm from "../ButtonConfirm";

interface ModalUpdateAssignaturesProps {
    setOpenModalupdateAssignature: (arg: boolean) => void;
}

const ModalUpdateAssignatures = (props: ModalUpdateAssignaturesProps) => {
    useEffect(() => {
        const close = (e: any) => {
          if(e.keyCode === 27){
            props.setOpenModalupdateAssignature(false)
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <div className="bg-black/60 flex items-center justify-center w-screen h-screen fixed">
            <div className="flex flex-col rounded-none bg-white w-full min-600:w-[700px] p-4 h-full min-600:h-min min-600:rounded-2xl overflow-y-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold m-0">Atualizar Assinaturas</h1>
                    <X size={22} className="hover:hover:scale-[1.1] transition-transform cursor-pointer" onClick={() => props.setOpenModalupdateAssignature(false)}/>
                </div>
                <div className="grid grid-cols-1 min-600:grid-cols-2 gap-4 border-y pb-4 border-[rgba(0, 0, 0, 0.16)]">
                    <div>
                        <CardAssignature imageCard="/cha-assinatura.jpeg"/>
                        <Assinaturas/>
                    </div>
                    <div>
                        <CardAssignature imageCard="/coffee-assinatura.jpeg"/>
                        <Assinaturas />
                    </div>
                </div>
                <ButtonConfirm className="hover:hover:scale-[1.05] transition-transform bg-[#E29279] py-2 px-4 rounded-lg text-white">
                    Atualizar
                </ButtonConfirm>
            </div>
        </div>
    )
}

export default ModalUpdateAssignatures;