export default function Profile({mediumImg}) {
  

    return (
        <section className="grid grid-cols-3 items-center gap-8 p-8 bg-[#4731D3]">
            {/* Sol Kısım (Yazı) */}
            <div className="text-lg text-white font-semibold mt-10">
                <p>Sol taraf yazı alanı. Buraya istediğin içeriği ekleyebilirsin.</p>
            </div>

            {/* Orta Kısım (Resim) */}
            <div className="flex justify-center mt-10">
                <img src={mediumImg} className="w-48 h-64 object-contain rounded-lg shadow-lg" alt="Profil Resmi" />
            </div>

            {/* Sağ Kısım (Yazı) */}
            <div className="text-lg text-white font-semibold mt-10">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum
                    nisi mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus
                    cumque magnam!
                </p>
            </div>
        </section>
    );
}
