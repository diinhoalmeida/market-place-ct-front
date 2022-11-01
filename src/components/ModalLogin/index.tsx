import { Eye, EyeSlash, XCircle } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import ButtonConfirm from "../ButtonConfirm";
import Input from "../Input";
import {InputForm} from "../../components/index";
import axios from "axios";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import Context from "../../context/context";

export interface ModalProfileProps {
    setModalSelect: (arg: string) => void;
}

const ModalLogin = (props: ModalProfileProps) => {
    const [modalAlert, setModalAlert] = useState<string[]>([]);
    const [eyeOpen, setEyeOpen] = useState<boolean>(true);
    const { decodedToken, isExpired, reEvaluateToken  }: any = useJwt('');
    const navigate = useNavigate();
    const { handleProfileData } = useContext(Context);

    const changeEye = () => {
        const password = document.getElementById("senha");
        const passwordToConfirm =document.getElementById("senhaConfirm");

        const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordToConfirm?.setAttribute('type', type);
        password?.setAttribute('type', type);

        setEyeOpen(!eyeOpen);
    }

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        try {
            await axios.post(`http://localhost:3000/login`,
                {
                    nome: data.nome,
                    senha: data.senha
                }
            ).then(res => {
                console.log(res.data);
                reEvaluateToken(res.data);
            })

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (decodedToken?.id) {
            localStorage.setItem('token', decodedToken?.id);
            handleProfileData(decodedToken.id);
            navigate(`/profilepage/${decodedToken?.id}`);
        }
    }, [decodedToken])

    return (
        <>
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleLogin}>
                <div className="flex flex-col relative">
                    {modalAlert.includes('name') && (
                        <XCircle size={15} className="absolute -left-5 top-1"/>
                    )}
                    <label htmlFor="name" className="font-semibold">Nickname:</label>
                    <InputForm type="text" name="nome" id="name" placeholder="Insira seu nick" />
                </div>
                <div className="flex flex-col relative">
                    {modalAlert.includes('name') && (
                        <XCircle size={15} className="absolute -left-5 top-1"/>
                    )}
                    <label htmlFor="senha" className="font-semibold">Senha:</label>
                    <div className="w-full rounded text-sm flex items-center relative">
                        <InputForm type="password" name="senha" id="senha" placeholder="Digite sua senha" className="w-full"/>
                        <div className="rounded flex justify-center items-center z-10">
                            {!eyeOpen ? 
                                (<Eye onClick={() => changeEye()} className="cursor-pointer absolute right-4" size={24} />)
                                :
                                (<EyeSlash onClick={() => changeEye()} className="cursor-pointer absolute right-4" size={24} />) 
                            }
                        </div>
                    </div>
                </div>
                <p 
                    className="text-xs"
                >
                    Não tem uma conta ainda? <a className="text-emerald-500 cursor-pointer hover:text-emerald-600" onClick={() => props.setModalSelect('Cadastro')}>Cadastre-se!</a>
                </p>
                <div className="w-full flex justify-center">
                    <ButtonConfirm className="hover:hover:scale-[1.05] transition-transform bg-[#E29279] py-2 px-4 rounded-lg text-white">
                        Login
                    </ButtonConfirm>
                </div>
            </form>
        </>
    )
}

export default ModalLogin;