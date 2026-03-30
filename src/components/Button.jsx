export default function Button({ title }) {
  const buttonId = title.at(0).toLowerCase() + title.slice(1);

  return <button id={buttonId}>{title}</button>;
}
