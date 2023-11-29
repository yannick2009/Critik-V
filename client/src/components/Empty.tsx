import "./styles/Empty.scss";

type EmptyProps = {
  label: string;
  text: string;
};

export default function Empty({ label, text }: EmptyProps): JSX.Element {
  // ============ RENDER ============ //
  return (
    <div className="empty">
      <i className="fa-regular fa-file-lines"></i>
      <h2 className="empty__title">{label}</h2>
      <p className="empty__text">{text}</p>
    </div>
  );
}
