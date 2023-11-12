import "./styles/ResumesFIlter.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ResumesFilter() {
  return (
    <div id="resumes__filter">
      <div className="part__1">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "btn__active" : undefined)}>
          <button>Tous les CV</button>
        </NavLink>
        <NavLink
          to={"favoris"}
          className={({ isActive }) => (isActive ? "btn__active" : undefined)}>
          <button>Mes favoris</button>
        </NavLink>
        <NavLink
          to={"my-resume"}
          className={({ isActive }) => (isActive ? "btn__active" : undefined)}>
          <button>Mes CV</button>
        </NavLink>
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
        <Link to="/upload-resume">
          <button className="btn__upload">Uploader CV</button>
        </Link>
      </div>
    </div>
  );
}
