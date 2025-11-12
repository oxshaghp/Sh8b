import Image from "next/image";
import { useTranslations } from "next-intl";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";
import { Button } from "./button";
import { BsBookmarkFill } from "react-icons/bs";
import { siteLinks } from "@/lib/data";

function WelcomePage() {
  const t = useTranslations("FirstPatr");

  return (
    <section className="container m-auto mt-28 flex flex-col items-center md:gap-64 gap-10 justify-start md:flex-row md:items-center">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center md:items-start md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h1 className="text-4xl font-bold md:text-5xl">{t("name")} 🧑‍💻</h1>
          <h2 className="text-3xl font-semibold text-(--p_text) dark:text-(--p_text) md:text-5xl">
            {t("job")}
          </h2>
          <div className="flex items-center gap-3 text-base md:text-lg">
            <LuMapPin className="size-5 text-(--loc)" />
            <p className="font-bold text-(--loc)">{t("locatioon")}</p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground dark:text-(--p_text)">
          {t("dec")}
        </p>

        <Button variant="outline" size="lg" asChild>
          <Link
            href={siteLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsBookmarkFill />
            {t("downloadCv")}
          </Link>
        </Button>
      </div>
      <div className="flex w-full justify-center md:w-auto md:justify-start">
        <div className="relative flex h-44 w-44 items-center justify-center md:h-56 md:w-56">
          <div className="absolute inset-0 rounded-[28px] bg-[conic-gradient(at_top,#22c55e,#2563eb,#a855f7,#22c55e)] opacity-80 blur-sm" />

          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-[28px] bg-[conic-gradient(#22c55e,#2563eb,#a855f7,#22c55e)] opacity-90" />

          <div className="relative z-10 m-[6px] flex h-full w-full items-center justify-center overflow-hidden rounded-[24px] bg-white p-1 dark:bg-[#0f0f0f]">
            <Image
              src="/images/me.jpg"
              alt={t("name")}
              fill
              className="rounded-[20px] object-cover"
              sizes="(max-width: 768px) 176px, 208px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
