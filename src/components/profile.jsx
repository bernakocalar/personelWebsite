import { useLanguage } from "../hooks/Language";

export default function Profile({mediumImg}) {
  const { t } = useLanguage();

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 p-6 md:p-8 bg-[#4731D3]">
  <div className="text-4xl md:text-lg text-white font-semibold mt-6 md:mt-10 text-right md:text-left">
    <p>{t.profile.title}</p>
  </div>

  <div className="flex justify-center mt-6 md:mt-10">
    <img src={mediumImg} className="w-32 h-48 md:w-48 md:h-64 object-contain rounded-lg shadow-lg" alt="Profil Resmi" />
  </div>
  <div className="text-base md:text-lg text-white font-semibold mt-6 md:mt-10 text-center md:text-left">
    <p>
    {t.profile.desc}
    </p>
  </div>
</section>
    );
}
