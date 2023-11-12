import "./styles/ResumesList.scss";
import Resume from "@/components/Resume";

export default function ResumesList() {
  return (
    <div id="resumes__list">
      <Resume />
      <Resume />
    </div>
  );
}
