import { projects } from "@/data/projects";
import { evidence } from "@/data/sources";
export default function SignatureStats() {
  return (
    <div className="facts-strip" aria-label="Portfolio at a glance">
      <p>
        <strong>{projects.length}</strong>
        <span>public case studies</span>
      </p>
      <p>
        <strong>{Object.keys(evidence).length}</strong>
        <span>linked source repositories</span>
      </p>
      <p>
        <strong>AI + software</strong>
        <span>from integration to interface</span>
      </p>
    </div>
  );
}
