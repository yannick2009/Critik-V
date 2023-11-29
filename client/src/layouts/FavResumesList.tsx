import "./styles/ResumesList.scss";
import Empty from "@components/Empty";

export default function FavResumesList(): JSX.Element {
  // ============ RENDER =========== //
  return (
    <div className="resumes__list">
      <Empty
        label="Aucun CV dans vos favoris"
        text="Mettez des etoiles au CV qui vous plaisent"
      />
    </div>
  );
}
