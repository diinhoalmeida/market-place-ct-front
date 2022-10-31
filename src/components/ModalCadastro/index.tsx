import { Eye, EyeSlash, XCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import ButtonConfirm from "../ButtonConfirm";
import { InputForm } from '../../components/index';
import axios from "axios";
import { ModalProfileProps } from "../ModalLogin";

const ModalCadastro = (props: ModalProfileProps) => {
    const [modalAlert, setModalAlert] = useState<string[]>([]);
    const [eyeOpen, setEyeOpen] = useState<boolean>(true);

    const handleCreateAccount = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (data.senha !== data.senhaConfirm) {
            alert('Senhas não coincidem');
            return;
        }

        try {
            await axios.post(`http://localhost:3000/cadastrar`,
                {
                    nome: data.nome,
                    email: data.email,
                    senha: data.senha
                }
            )   
            
            alert('Cadastro Realizado');
            props.setModalSelect('Login');
        } catch (error: any) {
            alert(`${error.response.data}`)
        }
    }

    const changeEye = () => {
        const password = document.getElementById("senha");
        const passwordToConfirm =document.getElementById("senhaConfirm");

        const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordToConfirm?.setAttribute('type', type);
        password?.setAttribute('type', type);

        setEyeOpen(!eyeOpen);
    }

    return (
        <>
            <form onSubmit={handleCreateAccount} className="mt-6 flex flex-col gap-4"> 
                <div className="flex flex-col relative">
                    {modalAlert.includes('name') && (
                        <XCircle size={15} className="absolute -left-5 top-1"/>
                    )}
                    <label htmlFor="name" className="font-semibold">Nickname:</label>
                    <InputForm type="text" name="nome" id="name" placeholder="Como te chamam dentro do game?" />
                </div> 
                <div className="flex flex-col relative">
                    {modalAlert.includes('email') && (
                        <XCircle size={15} className="absolute -left-5 top-1"/>
                    )}
                    <label htmlFor="email" className="font-semibold">E-mail:</label>
                    <InputForm type="email" name="email" id="email" placeholder="Digite seu email" />              
                </div> 
                <div className="flex flex-col relative">
                    {modalAlert.includes('senha') && (
                        <XCircle size={15} className="absolute -left-5 top-1"/>
                    )}
                    <label htmlFor="senha" className="font-semibold">Senha:</label>
                    <div className="w-full rounded text-sm hover:text-zinc-500 flex justify-between items-center relative">
                        <InputForm type="password" name="senha" id="senha" placeholder="Digite sua senha" />
                        <div className="rounded flex justify-center items-center z-10">
                            {!eyeOpen ? 
                                (<Eye onClick={() => changeEye()} className="cursor-pointer absolute right-4" size={24} />)
                                :
                                (<EyeSlash onClick={() => changeEye()} className="cursor-pointer absolute right-4" size={24} />) 
                            }
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col relative">
                    {modalAlert.includes('senhaConfirm') && (
                        <XCircle size={15} className="absolute -left-5 top-1"/>
                    )}
                    <label htmlFor="senhaConfirm" className="font-semibold">Confirme sua senha:</label>
                    <InputForm type="text" name="senhaConfirm" id="senhaConfirm" placeholder="Confirmar senha" />
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <a onClick={() => props.setModalSelect('Login')} className="text-zinc-800 hover:hover:scale-[1.05] transition-transform cursor-pointer hover:text-[#E29279]">Login</a>
                    <div>
                        <ButtonConfirm type="submit" className="hover:hover:scale-[1.05] transition-transform bg-[#E29279] py-2 px-4 rounded-lg text-white">
                            Cadastrar
                        </ButtonConfirm>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalCadastro;