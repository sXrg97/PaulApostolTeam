type Props = { data: Record<string, unknown> };

// JSON-LD randat direct în HTML (server component, fără next/script).
export const JsonLd = ({ data }: Props) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
  />
);
