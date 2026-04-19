import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function WallzonePage() {
  const project = getProject("wallzone");
  if (!project) return notFound();
  return <ProjectPage project={project} />;
}

export const metadata = {
  title: "Wallzone — fozzoi",
  description:
    "High-performance wallpaper app built with React Native, TypeScript and the Unsplash API.",
};
