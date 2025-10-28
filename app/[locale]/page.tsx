import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LuMapPin } from "react-icons/lu";
import { BsBookmarkFill } from "react-icons/bs";
import Link from "next/link";
import { experinceData } from "@/lib/data";
import { projectData } from "@/lib/data";
import Image from "next/image";
import { MdCleaningServices } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Rating from "@/components/ui/Rating";
import Connects from "@/components/ui/Conects";
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
        {/* Btn */}
        <div className="flex justify-start items-center gap-4 mt-10">
          <Button variant={"default"} size={"lg"} className="cursor-pointer">
            <Link href="about">{t("aboutMe")}</Link>
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
            <BsBookmarkFill />
            {t("downloadCv")}
          </Button>
        </div>
        {/* Experince */}
        <div className="mt-10 text-center px-6 py-10 transition-colors duration-300">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            {t("What skills I have")}
          </p>

          <h2 className="font-bold text-3xl md:text-4xl mb-12 dark:text-(--p_text) text-gray-800">
            {t("experinceTitle")}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {experinceData.map((item) => (
              <div
                key={item.id}
                className="w-[250px] bg-white dark:bg-[#1b1b1b] rounded-2xl p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={item.icone}
                  alt={item.name}
                  width={55}
                  height={55}
                  className="rounded-xl"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.dec}
                  </p>
                </div>
              </div>
            ))}
            <Button
              variant={"default"}
              size={"lg"}
              className="flex justify-center items-center gap-2 cursor-pointer "
            >
              <Link href="/">{t("Show more")}</Link>
            </Button>
          </div>
        </div>
        {/* Serves */}
        <div className="mt-8 px-6 py-10 transition-colors duration-300">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              {t("What I Offer")}
            </p>

            <h2 className="font-bold text-3xl md:text-4xl mb-12 dark:text-(--p_text) text-gray-800">
              {t("Services")}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {/* Service 1 */}
            <div className="h-auto w-full sm:w-[300px] md:w-[350px] lg:w-[380px] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-[#1b1b1b] rounded-2xl p-6 flex flex-col justify-start gap-3">
              <MdCleaningServices className="size-10 text-pink-500" />
              <b className="text-2xl text-gray-800 dark:text-white">
                {t("Ui/Ux")}
              </b>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                {t("Ui/Ux dec")}
              </p>
            </div>

            {/* Service 2 */}
            <div className="h-auto w-full sm:w-[300px] md:w-[350px] lg:w-[380px] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-[#1b1b1b] rounded-2xl p-6 flex flex-col justify-start gap-3">
              <IoSpeedometer className="size-10 text-green-600" />
              <b className="text-2xl text-gray-800 dark:text-white">
                {t("Performance Optimization")}
              </b>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                {t("Performance Optimization dec")}
              </p>
            </div>

            {/* Service 3 */}
            <div className="h-auto w-full sm:w-[300px] md:w-[350px] lg:w-[380px] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-[#1b1b1b] rounded-2xl p-6 flex flex-col justify-start gap-3">
              <FaCode className="size-10 text-amber-400" />
              <b className="text-2xl text-gray-800 dark:text-white">
                {t("Clean & Reusable Code")}
              </b>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                {t("Clean & Reusable Code dec")}
              </p>
            </div>
          </div>
        </div>
        {/* Some Projects */}
        <div className="mt-11">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              {t("What I Offer")}
            </p>

            <h2 className="font-bold text-3xl md:text-4xl mb-12 dark:text-(--p_text) text-gray-800">
              {t("Projects")}
            </h2>
          </div>
          <div className="px-6 py-10 transition-colors duration-300">
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {projectData.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[300px] md:w-[330px] lg:w-[350px] bg-white dark:bg-[#1b1b1b] rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={180}
                      className="rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="mt-4 text-left">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {item.dec}
                    </p>

                    {/* skills buttons */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.Skils.map((skill, index) => (
                        <Button variant={"outline"} size={"sm"} key={index}>
                          {skill}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button
                variant={"default"}
                size={"lg"}
                className="flex justify-center items-center gap-2 cursor-pointer "
              >
                {t("Show more")}
              </Button>
            </div>
          </div>
        </div>
        {/* Rank */}
        <div className="mt-9">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              {t("What They Say")}
            </p>

            <h2 className="font-bold text-3xl md:text-4xl mb-12 dark:text-(--p_text) text-gray-800">
              {t("Rating & Testimonials")}
            </h2>
          </div>
          <Rating />
        </div>
        {/* Conects */}
        <div>
          <Connects />
        </div>
      </div>
    </main>
  );
}
