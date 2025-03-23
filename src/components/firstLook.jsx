export default function FirstLook() {
    return ( <section className="h-180 flex flex-col md:flex-row items-center justify-between bg-[linear-gradient(to_right,#4731D3_75%,#CBF281_25%)]">
        <div className="flex flex-col md:flex-row items-center mx-20">
            <div className="ml-28 text-left space-y-4">
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
            <div className="size-64 rounded-xl overflow-hidden bg-pink-500">
                <img src="" alt="Almila" />
            </div>
        </div>
        </section>
    );
}