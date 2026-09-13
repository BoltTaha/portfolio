import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="page-wrap">
      <div className="page-intro">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This page isn’t here.</h1>
        <p>
          The address may have changed. Explore the projects or return to the
          homepage.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <Link href="/projects" className="button solid">
            View projects
          </Link>
          <Link href="/" className="button">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
