import "./styles/ResumesFIlter.scss";

export default function ResumesFilter() {
  return (
    <div id="resumes__filter">
      <div className="part__1">
        <button className="btn__active">Tous les CV</button>
        <button>Mes favoris</button>
        <button>Mes CV</button>
      </div>
      <div className="part__2">
        <form>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="rechercher un CV"
          />
          <select id="mode" name="mode" defaultValue="Recent">
            {/* <option value="" disabled selected hidden>
              Trie des CV
            </option> */}
            <option value="Recent">Les plus recents</option>
            <option value="Recent">Les plus aimés</option>
            <option value="Recent">Les plus commentés</option>
          </select>
        </form>
        <button className="btn__upload">Uploader CV</button>
      </div>
    </div>
  );
}
