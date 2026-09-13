import { NorthlineProvider } from "@/components/northline/NorthlineProvider";

export default function NorthlineDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NorthlineProvider>{children}</NorthlineProvider>;
}
