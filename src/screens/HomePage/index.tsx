import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';

const HomePage = () => {
    return (
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <Header />
                <div className="w-full h-[400px] overflow-hidden animate-[toTop_.7s_.1s_backwards]">
                    <img src={'/image-home.jpeg'} alt="coffee and tea and cups on wood table" className='object-fill'/>
                </div>
                <div className="flex flex-col gap-2 pt-10">
                    <h1 className="text-center text-3xl">NOSSOS PRODUTOS</h1>
                    <h4 className="text-center">O MELHOR PARA OS MELHORES!</h4>
                </div>
                <div className="flex flex-row flex-wrap gap-4 gap-y-8 justify-center min-970:justify-start py-10">
                    <CardProduct />
                </div>
                <footer className="w-full bg-[#34261D] flex items-center justify-center p-5 animate-[toTop_.7s_.3s_backwards]">
                    <p className="text-slate-50">©Criado por Edilson Almeida!</p>
                </footer>
            </div>
        </div>
    )
}

export default HomePage;