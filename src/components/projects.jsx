import { useLanguage } from "../hooks/Language";

export default function Projects({mediumImg, pizzaImg , nestForYouImg}) {
    const { t } = useLanguage();
    return (
        <section className="flex flex-col bg-[#CBF281] gap-4 items-center">
        <div className="relative mx-24 h-40 w-9/12">
            <h1 className="absolute bottom-0 left-0 text-4xl font-bold text-[#4731D3]">Projects</h1>
        </div>
        <div className="flex mx-24 bg-white rounded-4xl gap-4 w-9/12">
            <img src={pizzaImg} className="w-96 h-96 object-contain rounded-4xl shadow-lg my-1.5 "></img>
            <section className="flex flex-col">
                <h2 className="text-4xl text-[#4731D3]">{t.projects.pizzaProjectTitle}</h2>
                <p className="text-[#383838]">{t.projects.pizzaProjectDesc}</p>
                <div className="my-4 gap-2.5">
                    <button className="bg-[#4731D3] py-2 mx-1 px-4 rounded-4xl space-x-2 text-white">React.js</button>
                    <button className="bg-[#4731D3] py-2 mx-1 px-4 rounded-4xl space-x-2 text-white">CSS</button>
                </div>
                <div className="font-bold mx-4 space-x-2 underline">
                <a href="https://bernakocalar.vercel.app/" >{t.projects.gotosite}</a>
                <a href="https://github.com/bernakocalar/pizzaProject" >Github</a>
                </div>
            </section>
        </div >
        <div className="flex mx-24 bg-white rounded-4xl gap-4 w-9/12">
        <img src={nestForYouImg} className="w-96 h-96 object-contain rounded-4xl shadow-lg my-1.5"></img>
             <section className="flex flex-col">
                <h2 className="text-4xl text-[#4731D3]">{t.projects.nestForYouTitle} </h2>
                <p> {t.projects.nestForYouDesc}</p>
                <div className="my-4 gap-2.5">
                <button className="bg-[#4731D3] py-2 mx-1 px-4 rounded-4xl space-x-2 text-white">React.js</button>
                <button className="bg-[#4731D3] py-2 mx-1 px-4 rounded-4xl space-x-2 text-white"> TailwindCSS</button>
                </div>
                <div className="font-bold mx-4 space-x-2 underline">
                    <a href="https://nest-for-you.vercel.app/" >{t.projects.gotosite}</a>
                    <a href="https://github.com/bernakocalar/nestForYou" >Github</a>
                </div>
            </section>
        </div>
        </section>
    )
}