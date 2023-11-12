import "./styles/Resumes.scss";
import ResumesFilter from "@/layouts/ResumesFilter";
import ResumesList from "@/layouts/ResumesList";

export default function Resumes() {
  return (
    <section className="resumes">
      <ResumesFilter />
      <ResumesList />
    </section>
  );
}
