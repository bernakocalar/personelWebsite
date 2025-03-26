export default function Projects({mediumImg}) {
    return (
        <section className="flex flex-col bg-[#CBF281] gap-4">
        <div className="relative mx-24 h-40 ">
            <h1 className="absolute bottom-0 left-0 text-4xl font-bold text-[#4731D3]">Projects</h1>
        </div>
        <div className="flex mx-24 bg-white rounded-4xl gap-4">
            <img src={mediumImg} className="w-96 h-96 object-contain rounded-lg shadow-lg"></img>
            <section className="flex flex-col">
                <h2 className="text-4xl text-[#4731D3]">Pizza Project</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum
                    nisi mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus
                    cumque magnam!</p>
                <div>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <link></link>
                    <link></link>
                </div>
            </section>
        </div >
        <div className="flex mx-24 bg-white rounded-4xl gap-4">
        <img src={mediumImg} className="w-96 h-96 object-contain rounded-lg shadow-lg"></img>
             <section className="flex flex-col">
                <h2 className="text-4xl text-[#4731D3]"></h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum
                    nisi mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus
                    cumque magnam!</p>
                <div>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <link></link>
                    <link></link>
                </div>
            </section>
        </div>
        </section>
    )
}