interface AffiliateCTAProps {
  name: string;
  url: string;
  description: string;
  cta?: string;
}

export default function AffiliateCTA({
  name,
  url,
  description,
  cta = "Start Free Trial",
}: AffiliateCTAProps) {
  return (
    <div className="my-8 rounded-lg border border-green-400/30 bg-green-400/5 p-6">
      <h3 className="text-lg font-semibold text-green-400">{name}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="mt-4 inline-block rounded-md bg-green-500 px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-green-400"
      >
        {cta} &rarr;
      </a>
    </div>
  );
}
