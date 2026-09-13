import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePanel } from "@/components/paperline/CasePanel";
import { DemoShell } from "@/components/paperline/DemoShell";
import { queue, ticketById } from "@/components/paperline/data";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return queue.map((ticket) => ({ id: ticket.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const ticket = ticketById(id);
  return {
    title: ticket ? `${ticket.id} · Paperline` : "Case · Paperline",
    description: "Exception case with timeline and refund approval gate.",
  };
}

export default async function PaperlineCasePage({ params }: PageProps) {
  const { id } = await params;
  const ticket = ticketById(id);
  if (!ticket) notFound();

  return (
    <DemoShell current={`/demo/paperline/case/${ticket.id}`}>
      <main id="main">
        <p className="type-meta">Case</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Exception detail
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Timeline, suggestions, and a refund gate with no real payouts.
        </p>
        <div className="mt-10">
          <CasePanel ticket={ticket} />
        </div>
      </main>
    </DemoShell>
  );
}
