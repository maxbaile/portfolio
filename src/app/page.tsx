import { FeaturedProjects, Hero } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
