import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Connects() {
  const t = useTranslations("connects");

  return (
    <div className="rounded-2xl mb-24 mt-16 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t("title")}{" "}
          <span className="text-blue-400">{t("titleHighlight")}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Get in Touch */}
          <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 min-w-[200px] justify-center">
            <FaEnvelope className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <Link href="bdllahalbnt@gmail.com">{t("getInTouch")}</Link>
          </button>

          {/* زر View My GitHub */}
          <button className="group bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center">
            <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <Link href="https://github.com/oxshaghp">{t("viewGitHub")}</Link>
          </button>
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default Connects;
