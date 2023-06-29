import About from "@/components/container/about";
import Header from "@/components/container/header";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      {/* @ts-expect-error Async Server Component */}
      <About />
    </main>
  );
}
