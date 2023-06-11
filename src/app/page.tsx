import SocialMedia from "@/components/social-media";

export default function Home() {
  return (
    <main className="mx-auto px-6">
      <p className="my-12 text-center text-3xl text-foreground">
        Welcome to your new Next.js site.
      </p>
      <SocialMedia />
    </main>
  );
}
