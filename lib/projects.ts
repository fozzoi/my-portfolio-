export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: string;
  year: string;
  role: string;
  highlights: string[];
  images: string[];
  coverImage: string;
};

export const projects: Project[] = [
  {
    slug: "wallzone",
    index: "01",
    title: "Wallzone",
    tagline: "Discover & set stunning wallpapers from Unsplash.",
    description:
      "High-performance wallpaper app utilizing the Unsplash API. Features responsive masonry grids, custom pagination logic, and a seamless browsing UI built entirely in React Native with TypeScript.",
    longDescription:
      "Wallzone is a fully-featured mobile wallpaper browser that connects to the Unsplash API to surface millions of high-resolution images. The app features a curated Trending section with a custom horizontal carousel, a full masonry grid browser, and a search interface — all built in React Native with TypeScript. Special attention was paid to image loading performance using progressive placeholders and background downloading so wallpapers are ready before the user taps Set.",
    tech: ["React Native", "TypeScript", "Tailwind CSS", "Expo", "Unsplash API"],
    status: "Shipped",
    year: "2026",
    role: "Solo developer — design & engineering",
    highlights: [
      "Masonry grid layout with dynamic column sizing",
      "Unsplash API integration with cursor-based pagination",
      "Custom horizontal carousel for trending section",
      "Progressive image loading with blur placeholders",
      "One-tap wallpaper set via native device APIs",
      "Full-text search with debounced API calls",
    ],
    images: [
      "/images/wallzone/Screenshot_20260419-125653.png",
      "/images/wallzone/Screenshot_20260419-125700.png",
      "/images/wallzone/Screenshot_20260419-125703.png",
      "/images/wallzone/Screenshot_20260419-125710.png",
      "/images/wallzone/Screenshot_20260419-125718.png",
      "/images/wallzone/Screenshot_20260419-125731.png",
    ],
    coverImage: "/images/wallzone/Screenshot_20260419-125653.png",
  },
  {
    slug: "watcher",
    index: "02",
    title: "The Watcher",
    tagline: "Ad-free media streaming with rich actor & film details.",
    description:
      "Robust media streaming application integrating a custom React Native WebView player with injected ad-blocking scripts. Delivers uninterrupted viewing experience with dynamic content loading via Expo.",
    longDescription:
      "The Watcher is a media companion app built for uninterrupted streaming. The core feature is a React Native WebView player with JavaScript injection that strips ads and overlays at runtime — no external service required. Beyond playback, the app pulls rich metadata including actor biographies, filmographies, and popularity scores from a media API, presenting them in a polished dark UI with full-bleed cover images and structured data cards.",
    tech: ["React Native", "Expo", "WebView", "JavaScript", "Media API"],
    status: "Shipped",
    year: "2026",
    role: "Solo developer — design & engineering",
    highlights: [
      "WebView player with runtime JS ad-injection blocking",
      "Actor biography pages with filmography lists",
      "Full-bleed hero images with gradient overlays",
      "Popularity scoring and metadata display",
      "Smooth bottom-tab navigation with custom icons",
      "Dark-first UI with consistent design language",
    ],
    images: [
      "/images/watcher/Screenshot_20260419-125511.png",
      "/images/watcher/Screenshot_20260419-125513.png",
      "/images/watcher/Screenshot_20260419-125517.png",
      "/images/watcher/Screenshot_20260419-125525.png",
      "/images/watcher/Screenshot_20260419-125536.png",
      "/images/watcher/Screenshot_20260419-125555.png",
      "/images/watcher/Screenshot_20260419-125603.png",
      "/images/watcher/Screenshot_20260419-125625.png",
    ],
    coverImage: "/images/watcher/Screenshot_20260419-125511.png",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}