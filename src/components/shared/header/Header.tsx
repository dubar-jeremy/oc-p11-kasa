import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();

  const getClassName = (isActive: boolean) => (isActive ? "underline" : "");

  return (
    <div className="header">
      <img
        src={logo}
        alt="logo"
        className="header_logo"
        onClick={() => navigate("/")}
      />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => getClassName(isActive)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => getClassName(isActive)}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
