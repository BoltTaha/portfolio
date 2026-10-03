import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export default function BreadcrumbJsonLd({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.path === "/" ? `${site.url}/` : `${site.url}${item.path}`,
        })),
      }}
    />
  );
}
