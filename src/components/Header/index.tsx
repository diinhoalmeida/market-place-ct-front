import { User, Heart, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { DrawerComponent, ModalProfile } from "../index";

const Header = () => {
    const [openBag, setOpenBag] = useState<boolean>(false);
    const [openModalProfile, setOpenModalProfile] = useState<boolean>(false);

    return (
        <div className="flex flex-row justify-between items-center h-[100px] animate-[toTop_.7s_.1s_backwards]">
            <img src={'/market-logo.png'} alt="logo da pagina" className="h-[250px] relative -left-10"/>
            <div className="flex flex-row justify-end items-center gap-10">
                <div className="flex flex-row items-center gap-5">
                    <a href="">Início</a>
                    <a href="">Produtos</a>
                </div>
                <div className=""/>
                <div className="flex flex-row items-center gap-5 relative">
                    <button className="appearance-none" onClick={() => setOpenModalProfile(true)}>
                        <User size={20} className="hover:hover:scale-[1.1] transition-transform"/>
                    </button>
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