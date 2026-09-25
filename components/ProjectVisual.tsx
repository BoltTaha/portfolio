import Image from "next/image";
import { sourceUrl } from "@/data/projects";
export default function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "local-document-deid") {
    return (
      <aside className="example-note">
        <p className="eyebrow">Prototype workflow</p>
        <h2>Local review before approved export.</h2>
        <p>
          The demo pack uses synthetic files to show the privacy workflow: local
          upload, extracted source text, human review, manual correction, and
          approved DOCX export. These screenshots do not contain client data.
        </p>
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 mt-6">
          {[
            {
              src: "local-application.png",
              alt: "Local De-ID prototype application running in a browser",
              caption: "Local application",
            },
            {
              src: "extracted-source.png",
              alt: "Extracted source text preview for review",
              caption: "Extracted source",
            },
            {
              src: "human-review.png",
              alt: "Human review screen with redaction decisions",
              caption: "Human review",
            },
            {
              src: "approved-export.png",
              alt: "Approved export screen after review attestation",
              caption: "Approved export",
            },
          ].map((item) => (
            <figure key={item.src}>
              <Image
                src={`/projects/local-deid/${item.src}`}
                alt={item.alt}
                width={624}
                height={544}
                sizes="(max-width:600px) 85vw, 420px"
                className="rounded-lg w-full h-auto border border-line"
              />
              <figcaption className="font-mono text-xs text-ink-soft mt-3">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </aside>
    );
  }
  if (slug !== "automated-color-grading") return null;
  return (
    <aside className="example-note">
      <p className="eyebrow">From the repository</p>
      <h2>A real color-transfer example.</h2>
      <p>
        The committed example transfers a warmer reference look to an overcast
        city scene. These images are resized copies of the original target and
        saved output.
      </p>
      <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 mt-6">
        {[
          {
            src: "color-target.webp",
            alt: "Original city street with cool gray tones and an overcast sky",
            caption: "Original target",
          },
          {
            src: "color-output.webp",
            alt: "The same city street after color transfer, with warm amber tones",
            caption: "Processed output",
          },
        ].map((item) => (
          <figure key={item.src}>
            <Image
              src={`/projects/${item.src}`}
              alt={item.alt}
              width={960}
              height={640}
              sizes="(max-width:600px) 85vw, 420px"
              className="rounded-lg w-full h-auto"
            />
            <figcaption className="font-mono text-xs text-ink-soft mt-3">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 mt-6">
        <a
          className="text-link"
          href={sourceUrl("automated-color-grading", "reference_sunset.jpg")}
        >
          Reference image ↗
        </a>
        <a
          className="text-link"
          href={sourceUrl("automated-color-grading", "target_city.jpg")}
        >
          Original target source ↗
        </a>
        <a
          className="text-link"
          href={sourceUrl(
            "automated-color-grading",
            "output/processed_target_city.jpg",
          )}
        >
          Processed output source ↗
        </a>
      </div>
    </aside>
  );
}
