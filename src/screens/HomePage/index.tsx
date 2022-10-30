import { Footer, Header, CardProduct } from '../../components/index';

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
                <div className="grid grid-cols-6 gap-4 py-10 animate-[toTop_.7s_.2s_backwards]">
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                    <CardProduct className="overflow-hidden shadow-box-shadow-cards bg-white p-3 rounded-2xl hover:scale-[1.1] cursor-pointer transition-transform"/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;