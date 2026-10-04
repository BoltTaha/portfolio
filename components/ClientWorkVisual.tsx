export default function ClientWorkVisual({ slug }: { slug: string }) {
  if (slug !== "basketball-clip-finder") return null;

  return (
    <aside className="example-note">
      <p className="eyebrow">Real-game diagnostic output</p>
      <h2>Ball, hoop, zones, and trajectory evidence in one overlay.</h2>
      <p>
        This 13-second example shows the computer-vision pipeline inspecting
        real basketball footage. The overlay exposes ball and hoop detections,
        confidence values, rim-interaction zones, and recent ball trajectories
        so detection decisions and difficult frames can be reviewed visually.
      </p>
      <figure className="mt-6">
        <video
          className="w-full h-auto rounded-lg border border-line bg-ink"
          controls
          playsInline
          preload="metadata"
          poster="/client-work/basketball/basketball-detection-poster.webp"
          aria-label="Basketball ball and hoop detection diagnostic video"
        >
          <source
            src="/client-work/basketball/basketball-detection-demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the embedded demonstration video.
        </video>
        <figcaption className="font-mono text-xs text-ink-soft mt-3">
          13-second H.264 diagnostic output · 1080p · approximately 30 FPS ·
          no audio
        </figcaption>
      </figure>
      <p className="mt-5 text-sm text-ink-soft">
        The visible boxes, zones, and trajectory lines are engineering-debug
        overlays rather than the simplified highlight clip delivered to an end
        user. They show intermediate evidence, including uncertain detections
        and miss states, instead of presenting the sample as a formal accuracy
        benchmark.
      </p>
    </aside>
  );
}
