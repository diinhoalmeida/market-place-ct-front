import { User, Heart, ShoppingCart, SignOut, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { DrawerComponent, ModalProfile } from "../index";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [openBag, setOpenBag] = useState<boolean>(false);
    const [userOn, setUserOn] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [openModalProfile, setOpenModalProfile] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserId = localStorage.getItem('token');
        setUserId(getUserId as string);
        if (getUserId) {
            setUserOn(true);
        }
    }, [])

    const handleLoggout = async () => {
        localStorage.clear();
        setUserOn(false);
        navigate('/');
    }

    const handleProducts = () => {
        navigate(`/profilepage/${userId}`)
    }

    return (
        <div className="flex flex-row justify-between items-center h-[100px] animate-[toTop_.7s_.1s_backwards]">
            <img src={'/market-logo.png'} alt="logo da pagina" className="h-[250px] relative -left-10"/>
            <div className="flex flex-row justify-end items-center gap-10">
                <div className="flex flex-row items-center gap-5">
                    <a href="/">Início</a>
                    <a href="/marketpage">Produtos</a>
                </div>
                <div className=""/>
                <div className="flex flex-row items-center gap-5 relative">
                    {userOn && 
                        <button className="appearance-none" onClick={() => handleProducts()}>
                            <Star size={20} className="hover:hover:scale-[1.1] transition-transform" />
                        </button>
                    }
                    {userOn ? 
                        <button className="appearance-none" onClick={() => handleLoggout()}>
                            <SignOut size={20} className="hover:hover:scale-[1.1] transition-transform"/>
                        </button>
                        :
                        <button className="appearance-none text-red" onClick={() => setOpenModalProfile(true)}>
                            <User size={20} className="hover:hover:scale-[1.1] transition-transform"/>
                        </button>
                    }
                    <button className="appearance-none" onClick={() => setOpenBag(true)}>
                        <ShoppingCart size={20} className="hover:hover:scale-[1.1] transition-transform"/>
                    </button>
                    {openBag && (<DrawerComponent openBag={openBag} setOpenBag={setOpenBag}/>)}
                    {openModalProfile && (<ModalProfile setOpenModalProfile={setOpenModalProfile}/>)}
                </div>
            </div>
        </div>
    )
}

export default Header;