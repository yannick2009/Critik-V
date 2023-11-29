import "./styles/Resumes.scss";
import ResumesFilter from "@layouts/ResumesFilter";
import { Outlet } from "react-router-dom";

export default function Resumes() {
  // ============ RENDER ============ //
  return (
    <section className="resumes">
      <ResumesFilter />
      <Outlet />
      {/* <ResumesList /> */}
    </section>
  );
}
