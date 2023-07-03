import About from "@/components/container/about/about";
import Header from "@/components/container/header/header";
import Skills from "@/components/container/skills/skills";
import Footer from "@/components/container/footer/footer";
import Projects from "@/components/container/projects/projects";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      {/* @ts-expect-error Async Server Component */}
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Projects />
      {/* @ts-expect-error Async Server Component */}
      <Skills />
      <Footer />
    </main>
  );
}
