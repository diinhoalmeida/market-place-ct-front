import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import ModalCadastro from "../ModalCadastro";
import ModalLogin from "../ModalLogin";

interface ModalProfileProps {
    setOpenModalProfile: (arg: boolean) => void;
}

const ModalProfile = (props: ModalProfileProps) => {
    const [modalSelect, setModalSelect] = useState<string>('Login');

    useEffect(() => {
        const close = (e: any) => {
          if(e.keyCode === 27){
            props.setOpenModalProfile(false)
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <div className="bg-black/60 flex items-center justify-center w-screen h-screen fixed right-0 bottom-0 overflow-hidden">
            <div className="bg-white py-8 px-10 rounded-2xl min-w-[400px]">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold m-0">{modalSelect}</h1>
                    <X size={22} className="hover:hover:scale-[1.1] transition-transform cursor-pointer" onClick={() => props.setOpenModalProfile(false)}/>
                </div>
                <div>
                    {modalSelect === "Login" ? 
                        (<ModalLogin setModalSelect={setModalSelect} />)
                        :
                        (<ModalCadastro setModalSelect={setModalSelect}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalProfile;