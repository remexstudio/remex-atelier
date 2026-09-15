import type { Metadata } from "next";
import { HomeScenes } from "@/components/HomeScenes";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Remex Studio" },
  description:
    "Agents, built to the brief. We design the job an agent is allowed to do — and the gate it cannot cross.",
  openGraph: {
    title: "Remex Studio",
    description:
      "Agents, built to the brief. We design the job an agent is allowed to do — and the gate it cannot cross.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Remex Studio",
    description:
      "Agents, built to the brief. We design the job an agent is allowed to do — and the gate it cannot cross.",
  },
};

export default function Home() {
  return (
    <SiteChrome variant="film">
      <HomeScenes />
    </SiteChrome>
  );
}
