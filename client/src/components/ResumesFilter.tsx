import "./styles/ResumesFIlter.scss";

export default function ResumesFilter() {
  return (
    <div id="resumes__filter">
      <div className="part__1">
        <button>Tous les CV</button>
        <button>Mes favoris</button>
        <button>Mes CV</button>
      </div>
      <div className="part__2">
        <form>
          <input type="search" name="" id="" />
          <select></select>
        </form>
        <button className="btn__upload">Uploader CV</button>
      </div>
    </div>
  );
}
