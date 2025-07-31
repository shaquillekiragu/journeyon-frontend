export default function Loading({ page }: { page: string }) {
  return (
    <article className="flex justify-center items-center w-full h-screen mt-10">
      <p aria-live="polite">
        <em>{`${page} `}Page loading...</em>
      </p>
    </article>
  );
}
