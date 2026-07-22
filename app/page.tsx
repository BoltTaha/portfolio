import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SignatureStats from "@/components/SignatureStats";
import ProjectsList from "@/components/ProjectsList";
import Experience from "@/components/Experience";
import StackChips from "@/components/StackChips";
import TrustRow from "@/components/TrustRow";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto px-8">
        <Hero />
        <SignatureStats />
        <ProjectsList />
        <Experience />
        <StackChips />
        <TrustRow />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
