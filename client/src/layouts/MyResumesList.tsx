import "./styles/ResumesList.scss";
import MyResume from "@/components/MyResume";

export default function MyResumesList(): JSX.Element {
  return (
    <div className="resumes__list">
      <MyResume />
      {/* <Empty label="Pas de CV trouvé" text="Pensez à uploader vos CV" /> */}
    </div>
  );
}
