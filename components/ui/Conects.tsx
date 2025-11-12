import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { siteLinks } from "@/lib/data";
import { Button } from "./button";

function Connects() {
  const t = useTranslations("connects");

  return (
    <div className="relative mb-24 mt-16 flex items-center justify-center rounded-2xl bg-linear-to-br from-gray-900 to-black p-4">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          {t("title")}{" "}
          <span className="text-blue-400">{t("titleHighlight")}</span>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
          {t("description")}
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button
            className="group min-w-[200px] justify-center gap-3 bg-blue-600 text-lg font-semibold text-white hover:bg-blue-700"
            asChild
          >
            <a href={siteLinks.email}>
              <FaEnvelope className="text-xl transition-transform duration-300 group-hover:scale-110" />
              {t("getInTouch")}
            </a>
          </Button>

          <Button
            variant="outline"
            className="group min-w-[200px] justify-center gap-3 border-gray-600 text-lg font-semibold text-white hover:border-gray-400 hover:text-white"
            asChild
          >
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110" />
              {t("viewGitHub")}
            </a>
          </Button>
        </div>

        <div className="pointer-events-none absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/10 blur-3xl delay-1000"></div>
      </div>
    </div>
  );
}

export default Connects;
