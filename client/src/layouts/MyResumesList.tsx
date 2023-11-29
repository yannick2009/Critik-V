import "./styles/ResumesList.scss";
import MyResume from "@components/MyResume";

export default function MyResumesList(): JSX.Element {
  // ============ RENDER =========== //
  return (
    <div className="resumes__list">
      <MyResume />
    </div>
  );
}
