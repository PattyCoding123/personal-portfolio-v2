import About from "@/components/container/about/about";
import Header from "@/components/container/header/header";
import Skills from "@/components/container/skills/skills";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      {/* @ts-expect-error Async Server Component */}
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Skills />
    </main>
  );
}
