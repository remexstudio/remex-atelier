import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoShell } from "@/components/kite/DemoShell";
import { ThreadDraft } from "@/components/kite/ThreadDraft";
import { itemById, morningItems } from "@/components/kite/data";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return morningItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = itemById(id);
  return {
    title: item ? `${item.title} · Kite` : "Thread · Kite",
    description: "Morning Remex thread draft with two tones and escalate.",
  };
}

export default async function KiteThreadPage({ params }: PageProps) {
  const { id } = await params;
  const item = itemById(id);
  if (!item) notFound();

  return (
    <DemoShell current={`/demo/kite/thread/${item.id}`}>
      <main id="main">
        <p className="type-meta">Thread</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Draft desk</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Two tones. Escalate to a human. There is no auto-publish path.
        </p>
        <div className="mt-10">
          <ThreadDraft item={item} />
        </div>
      </main>
    </DemoShell>
  );
}
