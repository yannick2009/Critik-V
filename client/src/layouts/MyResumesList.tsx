import "./styles/ResumesList.scss";
// import Resume from "@/components/Resume";
import Empty from "@/components/Empty";

export default function MyResumesList(): JSX.Element {
  return (
    <div className="resumes__list">
      {/* <Resume />
      <Resume /> */}
      <Empty label="Pas de CV trouvé" text="Pensez à uploader vos CV" />
    </div>
  );
}
