import type { Metadata } from "next";
import { HomeScenes } from "@/components/HomeScenes";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Remex Studio" },
  description: "Agents, built to the brief. A Seattle studio.",
  openGraph: {
    title: "Remex Studio",
    description: "Agents, built to the brief. A Seattle studio.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Remex Studio",
    description: "Agents, built to the brief. A Seattle studio.",
  },
};

export default function Home() {
  return (
    <SiteChrome variant="film">
      <HomeScenes />
    </SiteChrome>
  );
}
