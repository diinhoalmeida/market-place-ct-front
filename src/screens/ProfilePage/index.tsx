import { NotePencil } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CardSignature, Footer, Header, ModalUpdateSignature } from "../../components";
import { useParams } from 'react-router-dom';
import Context from "../../context/context";

export interface ProfileDataProps {
    id: string;
    nickName: string;
    createdAt: string;
    email: string;
    signature: string[];
}

const ProfilePage = () => {
    const { handleProfileData, profileData } = useContext(Context);
    const [openModalUpdateAssignature, setOpenModalupdateAssignature] = useState<boolean>(false);
    let { id }: any = useParams();

    useEffect(() => {
        handleProfileData(id);
    }, [])

    return (
        <div className="w-screen flex justify-center px-14">
            <div className="flex flex-col xl:w-[1280px] w-full justify-center">
                <Header />
                <main className="flex flex-col gap-6 mb-20">
                    <div className="w-full max-h-[400px] overflow-hidden animate-[toTop_.7s_.1s_backwards] first-letter:flex justify-center rounded-2xl flex place-items-end">
                        <img src={'/profile-page.jpeg'} alt="coffee and tea and cups on wood table"/>
                    </div>
                    <section className="pt-1 rounded-[10px] animate-[toTop_.7s_.2s_backwards] bg-white p-4">
                        <div className="flex w-full justify-between items-center">
                            <h1 className="text-xl font-bold m-0">Suas Assinaturas</h1>
                            <div className="flex items-center flex-row cursor-pointer hover:hover:scale-[1.1] transition-transform" onClick={() => setOpenModalupdateAssignature(true)}>
                                <NotePencil size={20} color={`#A1A1AA`} />
                                <h4 className="font-[400] text-[16px] text-[#A1A1AA] tracking-[-0.18px]">Editar</h4>
                            </div>
                        </div>
                        <div>
                            <CardSignature imageCard={'/cha-assinatura.jpeg'} profileData={profileData} type="cha"/>
                            <CardSignature imageCard={'/coffee-assinatura.jpeg'} profileData={profileData} type="cafe"/>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
            {openModalUpdateAssignature && <ModalUpdateSignature profileData={profileData} setOpenModalupdateAssignature={setOpenModalupdateAssignature} signatures={profileData.signature} idUser={profileData.id}/>}
        </div>
    )
}

export default ProfilePage;