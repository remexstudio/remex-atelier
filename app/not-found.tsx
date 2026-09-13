import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-2xl flex-col justify-center px-6 py-24 sm:px-10">
      <p className="font-serif text-sm tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-8 font-serif text-3xl tracking-tight text-accent">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        That route is not on the map yet.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit text-sm text-accent underline-offset-4 hover:underline"
      >
        Back to Remex Studio
      </Link>
    </main>
  );
}
