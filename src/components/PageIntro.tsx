export default function PageIntro({
  title,
  emphasis,
  description,
}: {
  title: string;
  emphasis?: string;
  description: string;
}) {
  return (
    <header className="mb-liminal max-w-2xl">
      <h1 className="font-display text-display">
        {title}
        {emphasis ? (
          <>
            {" "}
            <em className="text-rose">{emphasis}</em>
          </>
        ) : null}
      </h1>
      <p className="mt-6 leading-relaxed text-midnight/70">{description}</p>
    </header>
  );
}
