import "./Header.css";
import logo from "../../assets/premierleague.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
