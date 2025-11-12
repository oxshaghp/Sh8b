import { projectData } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectGallery() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projectData.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
}
