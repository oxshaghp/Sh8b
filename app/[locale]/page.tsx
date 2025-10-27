import { useTranslations } from "next-intl";
import { LuMapPin } from "react-icons/lu";
import { TbTable } from "react-icons/tb";
export default function HomePage() {
  const t = useTranslations("FirstPatr");
  return (
    <main className="container m-auto">
      {/* First Part */}
      <div className="mt-20">
        {/* Avilble Work */}
        <div className="w-48 h-9 rounded-3xl flex justify-center items-center gap-4 bg-green-500/15">
          <span
            className="w-2 h-2 rounded-full bg-green-600 shadow shadow-green-500 animate-pulse
          "
          ></span>
          <p className=" text-green-600">{t("Avilble")}</p>
        </div>
        {/* Explain Me */}
        <div className="w-full h-auto flex justify-center items-start flex-col gap-5 mt-16">
          <h1 className="font-bold text-5xl"> {t("name")} 🧑‍💻 </h1>
          <h2 className="font-bold text-5xl dark:text-(--p_text)">
            {t("job")}
          </h2>
          {/* map location */}
          <div className="mt-5 flex justify-center items-center gap-5">
            <LuMapPin className="size-5 text-(--loc)" />
            <p className="font-bold text-lg text-(--loc)">{t("locatioon")}</p>
          </div>
        </div>
        {/* dec me */}
        <div className="mt-7 max-w-4xl text-lg">
          <p className="dark:text-(--p_text)">{t("dec")}</p>
        </div>
      </div>
    </main>
  );
}
