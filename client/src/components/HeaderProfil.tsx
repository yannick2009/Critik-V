import "./styles/HeaderProfil.scss";
import profil_img_test from "@assets/img/avatar.jpg";

export default function HeaderProfil() {
  return (
    <div id="header__profil">
      <button className="btn__header--profil">uploader CV</button>
      <button className="profil">
        <img src={profil_img_test} alt="photo de profil" />
      </button>
    </div>
  );
}
