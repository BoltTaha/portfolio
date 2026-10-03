import Image from "next/image";
import { sourceUrl } from "@/data/projects";
export default function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "autonomous-driving-edge-perception") {
    return (
      <aside className="example-note">
        <p className="eyebrow">Raspberry Pi deployment update</p>
        <h2>The same perception pipeline, measured on edge hardware.</h2>
        <p>
          I deployed the pipeline to a Raspberry Pi 4B using ONNX Runtime CPU
          inference. This silent video is the actual annotated output from a
          public Udacity road clip: vehicle detections, persistent track IDs,
          lane and drivable-area estimation, and the on-device performance HUD.
        </p>
        <figure className="mt-6">
          <video
            className="w-full h-auto rounded-lg border border-line bg-ink"
            controls
            playsInline
            preload="metadata"
            poster="/projects/autonomous-driving/raspberry-pi-benchmark-poster.webp"
            aria-label="Road-perception pipeline benchmarked on a Raspberry Pi 4B"
          >
            <source
              src="/projects/autonomous-driving/raspberry-pi-benchmark.mp4"
              type="video/mp4"
            />
            Your browser does not support the embedded demonstration video.
          </video>
          <figcaption className="font-mono text-xs text-ink-soft mt-3">
            8.84-second H.264 output · 221 frames · 25 FPS playback · public
            road footage · processed on Raspberry Pi 4B · no audio
          </figcaption>
        </figure>
        <dl className="grid grid-cols-4 max-[850px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4 mt-7">
          <div>
            <dt className="font-mono text-xs uppercase text-clay-deep">
              FP32 processing
            </dt>
            <dd className="font-serif text-2xl mt-1">~2.0 FPS</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-clay-deep">
              Detector inference
            </dt>
            <dd className="font-serif text-2xl mt-1">~458 ms</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-clay-deep">
              Dynamic INT8
            </dt>
            <dd className="font-serif text-2xl mt-1">~1.8 FPS</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-clay-deep">
              Load temperature
            </dt>
            <dd className="font-serif text-2xl mt-1">38.9°C</dd>
          </div>
        </dl>
        <p className="mt-6 rounded-lg border border-line bg-paper/50 p-4 text-sm text-ink-soft">
          <strong className="text-ink">Playback and processing are different.</strong>{" "}
          The completed file plays at the source rate of 25 FPS, so motion looks
          smooth. The ~2.0 FPS figure is the Raspberry Pi&apos;s offline processing
          throughput: it handled about two source frames each second and needed
          roughly 110 seconds to process this 221-frame, 8.84-second clip. This
          result is not a real-time camera-throughput claim.
        </p>
        <div className="border-t border-line mt-7 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-clay-deep">
            Benchmark finding
          </p>
          <p className="mt-3">
            Dynamic INT8 made the model smaller but did not make this tested
            runtime faster. The next experiments therefore profile input size,
            thread settings, and ARM-oriented runtimes before introducing a
            Hailo or Coral accelerator. Quantization is treated as a measured
            hardware-and-runtime decision, not an automatic speed claim.
          </p>
          <p className="font-mono text-xs text-ink-mute mt-4">
            The earlier development baseline remains separate: 9.42–9.58 FPS
            and 91.63–92.30 ms mean detector inference on a constrained
            one-logical-CPU x86 environment.
          </p>
        </div>
      </aside>
    );
  }
  if (slug === "local-document-deid") {
    return (
      <aside className="example-note">
        <p className="eyebrow">Review workflow</p>
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
              alt: "Local De-ID application running in a browser",
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
