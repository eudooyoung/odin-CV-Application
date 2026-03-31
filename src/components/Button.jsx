export default function Button({ title, onClick }) {
  const buttonId = title.at(0).toLowerCase() + title.slice(1);

  return (
    <button id={buttonId} onClick={onClick}>
      {title}
    </button>
  );
}
