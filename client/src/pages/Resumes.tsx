import "./styles/Resumes.scss";
import ResumesFilter from "@/layouts/ResumesFilter";
// import ResumesList from "@/layouts/ResumesList";
import { Outlet } from "react-router-dom";

export default function Resumes() {
  return (
    <section className="resumes">
      <ResumesFilter />
      <Outlet />
      {/* <ResumesList /> */}
    </section>
  );
}
