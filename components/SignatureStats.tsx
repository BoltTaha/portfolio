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
        <strong>2</strong>
        <span>detailed client AI case studies</span>
      </p>
    </div>
  );
}
