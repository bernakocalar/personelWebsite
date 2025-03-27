import { useLanguage } from "../hooks/Language";

export default function FirstLook({ mediumImg, linkedinIcon, githubIcon }) {
    const { t, toggleLanguage } = useLanguage();
    return (
        
         <section className="w-full h-[671px] flex flex-col items-center bg-[linear-gradient(to_right,#4731D3_76%,#CBF281_24%)]">
        <div className="w-8/12 flex mx-20 h-1/5 items-center justify-between ">
                <h1 className="text-[#CBF281] text-4xl ml-20">Berna</h1>
                <div className=" font-bold text-3xl flex items-center">
        <button onClick={toggleLanguage} className="text-[#CBF281]" >{t.changeLang}</button>
        <h1 className="text-[#3730A3]">{t.darkMode}</h1>
        </div>
                </div>
        <div className="flex items-center mx-20 h-3/5 w-8/12">
            <div className="ml-28 text-left space-y-4 ">
                <h2 className="text-6xl text-[#CBF281] my-1rem">{t.frontendDeveloper.title}</h2>
                <p className="text-2xl text-[#FFFFFF] my-1rem">{t.frontendDeveloper.description}</p>
                <div className=" flex gap-3 mt-4">
                    <button className="bg-white text-#4731D3 py-2 px-4 rounded flex items-center gap-2">
                        <img src={githubIcon}/>
                        <p className="text-[#3730A3]">Github</p>
                    </button>
                    <button className="bg-white text-#4731D3 py-2 px-4 rounded flex items-center gap-2">
                        <img src={linkedinIcon}/>
                        <p className="text-[#3730A3]">Linkedin</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col size-70 rounded-xl overflow-hidden bg-pink-500 mx-30">
            <img src={mediumImg} alt="Almila" />
        </div>
        </div>
        </section>
        
    );
}
