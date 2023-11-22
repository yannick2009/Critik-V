import "./styles/ResumeGuide.scss";
import img from "@assets/img/coffre-fort.webp";

const title: string = "Guide du CV";
const text: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat voluptatem qui? Laborum commodi facilis ipsa expedita voluptas voluptate obcaecati, ducimus numquam, amet quasi rerum alias, nam animi eos dolore.";

export default function ResumeGuide(): JSX.Element {
  return (
    <section id="resumeGuide">
      <img src={img} alt="tresor-image" />
      <h3>{title}</h3>
      <p>{text}</p>
      <button>Telecharger le PDF</button>
    </section>
  );
}
