import "./styles/ResumesList.scss";
import Resume from "@/components/Resume";

export default function FavResumesList(): JSX.Element {
  return (
    <div className="resumes__list">
      <Resume />
    </div>
  );
}
