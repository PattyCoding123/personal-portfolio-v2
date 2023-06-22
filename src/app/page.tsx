import About from "@/components/container/about";

export default function Home() {
  return (
    <main className="mx-auto px-6">
      {/* @ts-expect-error Async Server Component */}
      <About />
    </main>
  );
}
