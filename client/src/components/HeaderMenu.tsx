import "./styles/HeaderMenu.scss";
import Logo from "@assets/img/critik-v-logo.svg";
import { NavLink } from "react-router-dom";

function HeaderMenu(): JSX.Element {
  // ============ RENDER ============ //
  return (
    <div id="header__menu">
      <NavLink to="/">
        <img id="logo" src={Logo} alt="logo de critik v" />
      </NavLink>
      <NavLink
        to="about-us"
        className={({ isActive }) => (isActive ? "actived" : undefined)}>
        <button className="btn__header--menu">à propos</button>
      </NavLink>
      <NavLink
        to="resume-guide"
        className={({ isActive }) => (isActive ? "actived" : undefined)}>
        <button className="btn__header--menu">guide du cv</button>
      </NavLink>
      <NavLink
        to="upload-resume"
        className={({ isActive }) => (isActive ? "actived" : undefined)}>
        <button className="btn__header--menu">upload cv</button>
      </NavLink>
    </div>
  );
}

export default HeaderMenu;
