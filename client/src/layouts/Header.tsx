import HeaderMenu from "@/components/HeaderMenu";
import HeaderProfil from "@/components/HeaderProfil";
import "./styles/Header.scss";

function Header() {
  return (
    <header>
      <HeaderMenu />
      <HeaderProfil />
    </header>
  );
}

export default Header;
