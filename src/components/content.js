export default function Content({ children }) {
  return (
    <section className="min-w-full prose p-4 lg:col-start-2 lg:col-span-3">
      {children}
    </section>
  );
}
