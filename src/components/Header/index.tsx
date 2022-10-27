import { User, Heart, ShoppingCart } from "phosphor-react";

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center h-[100px] animate-[toTop_.7s_.1s_backwards]">
            <img src={'/market-logo.png'} alt="logo da pagina" className="h-[250px] relative -left-10"/>
            <div className="flex flex-row justify-end items-center gap-10">
                <div className="flex flex-row items-center gap-5">
                    <a href="">Home</a>
                    <a href="">Products</a>
                </div>
                <div className=""/>
                <div className="flex flex-row items-center gap-5">
                    <User size={20}/>
                    <Heart size={20}/>
                    <ShoppingCart size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Header;