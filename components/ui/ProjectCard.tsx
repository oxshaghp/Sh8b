import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

type ProjectLinks = {
  live?: string;
  repo?: string;
};

type ProjectItem = {
  id: number;
  title: string;
  dec: string;
  image: string;
  Skils: string[];
  links?: ProjectLinks;
};

type ProjectCardProps = {
  project: ProjectItem;
  footer?: ReactNode;
};

const isValidLink = (value: string | undefined) =>
  Boolean(value && value !== "#");

export default function ProjectCard({ project, footer }: ProjectCardProps) {
  const t = useTranslations("ProjectsCommon");

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div>
        <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.dec}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.Skils.map((skill) => (
            <Button key={skill} variant="outline" size="sm" type="button">
              {skill}
            </Button>
          ))}
        </div>

        {(isValidLink(project.links?.live) ||
          isValidLink(project.links?.repo)) && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {isValidLink(project.links?.live) && (
              <Button variant="default" size="sm" asChild>
                <a
                  href={project.links?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("live")}
                </a>
              </Button>
            )}
            {isValidLink(project.links?.repo) && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.links?.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("repo")}
                </a>
              </Button>
            )}
          </div>
        )}

        {footer}
      </div>
    </article>
  );
}
