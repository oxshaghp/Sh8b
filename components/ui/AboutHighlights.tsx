import { aboutFocusAreas, aboutMilestones } from "@/lib/data";
import { useTranslations } from "next-intl";
import { FaHandsHelping, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

const focusIconMap = {
  FaLightbulb,
  FaLaptopCode,
  FaHandsHelping,
} as const;

type FocusIconKey = keyof typeof focusIconMap;

export default function AboutHighlights() {
  const t = useTranslations("AboutPage");

  return (
    <section className="container m-auto space-y-16 px-6">
      <div className="space-y-8">
        <header className="text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-primary">
            {t("workSection.badge")}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            {t("workSection.title")}
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutFocusAreas.map((item) => {
            const Icon = focusIconMap[item.icon as FocusIconKey] ?? FaLightbulb;

            return (
              <article
                key={item.id}
                className="rounded-3xl border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl text-primary ring-1 ring-primary/40">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(`focusAreas.${item.id}.title`)}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t(`focusAreas.${item.id}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        <header className="flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">
              {t("journeySection.badge")}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {t("journeySection.title")}
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl px-4 py-2 text-primary ring-1 ring-primary/40">
            <MdOutlineRocketLaunch className="size-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              {t("journeySection.highlight")}
            </span>
          </div>
        </header>

        <div className="space-y-6">
          {aboutMilestones.map((item, index) => (
            <article
              key={item.id}
              className="rounded-3xl border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary ring-1 ring-primary/40">
                  {t(`milestones.${item.id}.year`)}
                </span>
                <h3 className="text-2xl font-semibold text-foreground">
                  {t(`milestones.${item.id}.title`)}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`milestones.${item.id}.description`)}
              </p>
              {index !== aboutMilestones.length - 1 && (
                <div className="mt-6 hidden w-full items-center md:flex">
                  <span className="h-px w-full bg-primary/20"></span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
