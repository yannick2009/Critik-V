import "./styles/ResumesList.scss";
import Resume from "@/components/Resume";

export default function ResumesList() {
  return (
    <div className="resumes__list">
      <Resume />
      <Resume />
      <Resume />
      <Resume />
      <Resume />
    </div>
  );
}
