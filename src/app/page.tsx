import About from "@/components/container/about";

export default function Home() {
  return (
    <main className="mx-auto px-6">
      <p className="my-12 text-center text-3xl text-foreground">
        Welcome to your new Next.js site.
      </p>
      {/* @ts-expect-error Async Server Component */}
      <About />
    </main>
  );
}
