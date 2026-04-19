import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function WatcherPage() {
  const project = getProject("watcher");
  if (!project) return notFound();
  return <ProjectPage project={project} />;
}

export const metadata = {
  title: "The Watcher — fozzoi",
  description:
    "Ad-free media streaming app with actor details, built with React Native, Expo and WebView injection.",
};
