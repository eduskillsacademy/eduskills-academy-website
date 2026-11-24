
export default function SEO({ title, description, path }) {
  const canonicalUrl = `https://www.eduskillsacademy.in${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}
