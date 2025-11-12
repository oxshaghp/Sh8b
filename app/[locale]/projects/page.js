import ProjectGallery from "@/components/ui/ProjectGallery";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  return (
    <main className="container m-auto space-y-16 px-6 pb-24">
      <section className="mx-auto max-w-3xl space-y-6 text-center md:text-left">
        <p className="text-sm uppercase tracking-widest text-primary">
          {t("hero.badge")}
        </p>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          {t("hero.title")}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("hero.description")}
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <Button variant="default" size="lg" asChild>
            <Link href="contact">{t("hero.primaryAction")}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="about">{t("hero.secondaryAction")}</Link>
          </Button>
        </div>
      </section>

      <ProjectGallery />
    </main>
  );
}
