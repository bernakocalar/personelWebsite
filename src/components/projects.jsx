import { useLanguage } from "../hooks/Language";

export default function Projects({mediumImg, pizzaImg , nestForYouImg}) {
    const { t } = useLanguage();
    return (
        <section className="flex flex-col bg-[#CBF281] gap-4 items-center p-6 md:p-8">
  <div className="relative w-full max-w-5xl h-32 md:h-40 flex items-end px-6 md:px-24">
    <h1 className="text-3xl md:text-4xl font-bold text-[#4731D3]">Projects</h1>
  </div>

  <div className="flex flex-col md:flex-row mx-6 md:mx-24 bg-white rounded-3xl gap-4 w-full max-w-5xl p-4 md:p-6">
    <img src={pizzaImg} className="w-full md:w-96 h-auto md:h-96 object-contain rounded-3xl shadow-lg" />
    <section className="flex flex-col text-center md:text-left">
      <h2 className="text-3xl md:text-4xl text-[#4731D3]">{t.projects.pizzaProjectTitle}</h2>
      <p className="text-[#383838]">{t.projects.pizzaProjectDesc}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 my-4">
        <button className="bg-[#4731D3] py-2 px-4 rounded-3xl text-white">React.js</button>
        <button className="bg-[#4731D3] py-2 px-4 rounded-3xl text-white">CSS</button>
      </div>
      <div className="font-bold space-x-2 underline">
        <a href="https://bernakocalar.vercel.app/">{t.projects.gotosite}</a>
        <a href="https://github.com/bernakocalar/pizzaProject">Github</a>
      </div>
    </section>
  </div>

  <div className="flex flex-col md:flex-row mx-6 md:mx-24 bg-white rounded-3xl gap-4 w-full max-w-5xl p-4 md:p-6">
    <img src={nestForYouImg} className="w-full md:w-96 h-auto md:h-96 object-contain rounded-3xl shadow-lg" />
    <section className="flex flex-col text-center md:text-left">
      <h2 className="text-3xl md:text-4xl text-[#4731D3]">{t.projects.nestForYouTitle}</h2>
      <p>{t.projects.nestForYouDesc}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 my-4">
        <button className="bg-[#4731D3] py-2 px-4 rounded-3xl text-white">React.js</button>
        <button className="bg-[#4731D3] py-2 px-4 rounded-3xl text-white">TailwindCSS</button>
      </div>
      <div className="font-bold space-x-2 underline">
        <a href="https://nest-for-you.vercel.app/">{t.projects.gotosite}</a>
        <a href="https://github.com/bernakocalar/nestForYou">Github</a>
      </div>
    </section>
  </div>
</section>
    )
}