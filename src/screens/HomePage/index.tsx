import { Input } from '../../components/index';

const HomePage = () => {
    return (
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <div className="flex flex-row justify-between items-center h-[100px]">
                    <img src={'/market-logo.png'} alt="logo da pagina" className="h-[250px] relative -left-10"/>
                    <div className="flex flex-row justify-end items-center gap-10">
                        <div className="flex flex-row items-center gap-5">
                            <a>Home</a>
                            <a>Products</a>
                        </div>
                        <div className=""/>
                        <div className="flex flex-row items-center gap-5">
                            <div className="w-2 h-2 bg-black"></div>
                            <div className="w-2 h-2 bg-black"></div>
                            <div className="w-2 h-2 bg-black"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[400px] overflow-hidden">
                    <img src={'/image-home.jpeg'} alt="coffee and tea and cups on wood table" className='object-fill'/>
                </div>
                <div className="flex flex-col gap-2 p-10">
                    <h1 className="text-center text-3xl">NOSSOS PRODUTOS</h1>
                    <h4 className="text-center">O MELHOR PARA OS MELHORES!</h4>
                </div>
                <div className="grid grid-cols-2 min-880:grid-cols-3 min-1145:grid-cols-4 gap-4">
                    <div className="bg-black h-[300px]">s</div>
                    <div className="bg-black h-[300px]">s</div>
                    <div className="bg-black h-[300px]">s</div>
                    <div className="bg-black h-[300px]">s</div>
                    <div className="bg-black h-[300px]">s</div>
                    <div className="bg-black h-[300px]">s</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;