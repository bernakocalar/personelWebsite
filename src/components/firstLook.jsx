import { useLanguage } from "../hooks/Language";

export default function FirstLook({mediumImg}) {
    const { t, toggleLanguage } = useLanguage();
    return (
         <section className="h-180 flex flex-col md:flex-row items-center justify-between bg-[linear-gradient(to_right,#4731D3_75%,#CBF281_25%)]">

        <div className="flex flex-col md:flex-row items-center mx-20">
            <div className="ml-28 text-left space-y-4">
                <h1>Berna</h1>
                <h2 className="text-6xl text-[#CBF281] my-1rem">I am a Frontend
                Developer...</h2>
                <p className="text-2xl text-[#FFFFFF] my-1rem">...who likes to craft solid and scalable frontend products with great user experiences.</p>
                <div className=" flex gap-3 mt-4">
                    <button className="bg-white text-#4731D3 py-2 px-4 rounded">
                        <icon></icon>
                        <p >Github</p>
                    </button>
                    <button className="bg-white text-#4731D3 py-2 px-4 rounded">
                        <icon></icon>
                        <p>Linkedin</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col size-70 rounded-xl overflow-hidden bg-pink-500 mx-30">
            <div className="flex">
        <h1 className="mt-1">{t.welcome}</h1>
        <button onClick={toggleLanguage}>{t.changeLang}</button>
                </div>
                <img src={mediumImg} alt="Almila" />
            </div>
        </div>
        </section>
    );
}
