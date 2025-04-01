import { useLanguage } from "../hooks/Language";
import DarkModeToggle from "../hooks/darkModeToggle";

export default function FirstLook({ myImage, linkedinIcon, githubIcon, darkMode, setDarkMode }) {
  const { t, toggleLanguage } = useLanguage();
  return (
    <section className="w-full h-[671px] flex flex-col items-center bg-[linear-gradient(to_right,#4731D3_76%,#CBF281_24%)] dark:bg-gradient-to-r dark:from-purple-700 dark:to-green-400">
      <div className="w-8/12 flex mx-20 h-1/5 items-center justify-between">
        <h1 className="text-[#CBF281] text-4xl ml-20 dark:text-[#CBF281]">Berna</h1>
        <div className="font-bold text-3xl flex items-center">
          <button onClick={toggleLanguage} className="text-[#CBF281] dark:text-[#CBF281]">
            {t.changeLang}
          </button>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      <div className="flex items-center mx-20 h-3/5 w-8/12">
        <div className="ml-28 text-left space-y-4">
          <h2 className="text-6xl text-[#CBF281] my-1rem dark:text-[#CBF281]">{t.frontendDeveloper.title}</h2>
          <p className="text-2xl text-[#FFFFFF] my-1rem dark:text-[#EAEAEA]">{t.frontendDeveloper.description}</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-white text-#4731D3 py-2 px-4 rounded flex items-center gap-2 dark:bg-gray-800 dark:text-white">
              <img src={githubIcon} />
              <p className="text-[#3730A3] dark:text-[#A5A5A5]">Github</p>
            </button>
            <button className="bg-white text-#4731D3 py-2 px-4 rounded flex items-center gap-2 dark:bg-gray-800 dark:text-white">
              <img src={linkedinIcon} />
              <p className="text-[#3730A3] dark:text-[#A5A5A5]">Linkedin</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-xl overflow-hidden bg-pink-500 mx-30 dark:bg-pink-600 ml-4">
          <img src={myImage} alt="Almila" />
        </div>
      </div>
    </section>
  );
}
