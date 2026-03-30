export default function Section({ className, title, content }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {content}
    </section>
  );
}
