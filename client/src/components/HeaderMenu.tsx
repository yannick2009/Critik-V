import "./styles/HeaderMenu.scss";
import Logo from "@/assets/img/critik-v-logo.svg";

function HeaderMenu() {
  return (
    <div id="header__menu">
      <img id="logo" src={Logo} alt="logo de critik v" />
      <button className="btn__header--menu">à propos</button>
      <button className="btn__header--menu">guide du cv</button>
    </div>
  );
}

export default HeaderMenu;
