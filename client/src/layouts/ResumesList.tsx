import "./styles/ResumesList.scss";
import Resume from "@components/Resume";
import Pagination from "@components/Pagination";

export default function ResumesList() {
  // ============ RENDER ============ //
  return (
    <div className="resumes__list">
      <Resume />
      <Resume />
      <Resume />
      <Resume />
      <Resume />
      <Pagination />
    </div>
  );
}
