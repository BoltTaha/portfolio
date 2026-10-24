import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-identity">
        <Image
          src={site.image}
          alt="Portrait of Muhammad Taha"
          width={168}
          height={168}
          sizes="168px"
          preload
          className="portrait"
        />
        <div>
          <p className="eyebrow">Muhammad Taha / BoltTaha</p>
          <p className="text-ink-soft">{site.role}</p>
        </div>
      </div>
      <h1>
        I build video intelligence
        <br />
        and computer vision systems <em>for real-world footage.</em>
      </h1>
      <p className="hero-description">
        I turn images and video into reliable detections, persistent tracks,
        verified events, anomaly heatmaps, automated clips, and review-ready
        evidence.
      </p>
      <p className="text-ink-soft max-w-[620px] mb-8">
        My work includes a paid basketball highlight-detection system, an ONNX
        road-perception pipeline benchmarked on Raspberry Pi 4B, and BoardLens
        for explainable PCB anomaly inspection. I build with Python, OpenCV,
        PyTorch, YOLO, ONNX Runtime, FastAPI, and edge hardware.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link className="button solid" href="/projects">
          Explore the work →
        </Link>
        <Link className="button" href="/contact">
          Discuss a role or project
        </Link>
        <a className="button" href="/resume.pdf">
          View resume
        </a>
      </div>
      <p className="text-ink-soft max-w-[720px] mt-6 text-sm">
        Start with the{" "}
        <Link className="text-link" href="/client-work/basketball-clip-finder">
          basketball video analytics case study
        </Link>
        , the{" "}
        <Link
          className="text-link"
          href="/projects/autonomous-driving-edge-perception"
        >
          Raspberry Pi edge-perception benchmark
        </Link>
        , or the{" "}
        <Link className="text-link" href="/projects/boardlens-pcb-aoi">
          PCB anomaly-inspection system
        </Link>
        .
      </p>
    </section>
  );
}
