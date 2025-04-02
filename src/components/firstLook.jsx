import { useLanguage } from "../hooks/Language";
import DarkModeToggle from "../hooks/darkModeToggle";

export default function FirstLook({ myImage, linkedinIcon, githubIcon, darkMode, setDarkMode }) {
  const { t, toggleLanguage } = useLanguage();
  return (
    <section className="w-full h-auto min-h-[671px] flex flex-col items-center bg-[linear-gradient(to_right,#4731D3_76%,#CBF281_24%)] dark:bg-gradient-to-r dark:from-purple-700 dark:to-green-400 p-6 md:p-12">
    <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-4">
      <h1 className="text-[#CBF281] text-3xl md:text-4xl dark:text-[#CBF281]">Berna</h1>
      <div className="font-bold text-2xl md:text-3xl flex items-center gap-4 mt-4 md:mt-0">
        <button onClick={toggleLanguage} className="text-[#CBF281] dark:text-[#CBF281]">
          {t.changeLang}
        </button>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center px-6 md:px-20 w-full max-w-5xl gap-24 md:gap-12">
      <div className="text-left space-y-4 md:w-1/2">
        <h2 className="text-4xl md:text-6xl text-[#CBF281] dark:text-[#CBF281]">{t.frontendDeveloper.title}</h2>
        <p className="text-lg md:text-2xl text-[#FFFFFF] dark:text-[#EAEAEA]">{t.frontendDeveloper.description}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-white py-2 px-4 rounded flex items-center gap-2 dark:bg-gray-800 dark:text-white">
            <img src={githubIcon} className="w-6 h-6" />
            <p className="text-[#3730A3] dark:text-[#A5A5A5]">Github</p>
          </button>
          <button className="bg-white py-2 px-4 rounded flex items-center gap-2 dark:bg-gray-800 dark:text-white">
            <img src={linkedinIcon} className="w-6 h-6" />
            <p className="text-[#3730A3] dark:text-[#A5A5A5]">Linkedin</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col rounded-xl overflow-hidden bg-pink-500 dark:bg-pink-600 md:w-1/2">
        <img src={myImage} alt="Almila" className="w-full h-auto object-cover" />
      </div>
    </div>
  </section>
  );
}
