import Hero from "@/components/Hero";
import SignatureStats from "@/components/SignatureStats";
import ProjectsList from "@/components/ProjectsList";
import ServicesPreview from "@/components/ServicesPreview";
import Experience from "@/components/Experience";
import StackChips from "@/components/StackChips";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
export const metadata = pageMetadata(
  `${site.name} | ${site.role}`,
  site.description,
  "/",
);
export default function Home() {
  return (
    <main id="main-content" className="page-wrap">
      <Hero />
      <SignatureStats />
      <ProjectsList />
      <ServicesPreview />
      <StackChips />
      <Experience />
      <Testimonials />
      <FAQ />
    </main>
  );
}
