import { Link, useLocation } from "react-router-dom";
import notFoundLogo from "../../assets/404.png";
import "./notFound.css";

const NotFound = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="not_found">
      <img src={notFoundLogo} alt="not found" className="not_found_logo" />
      <p className="not_found_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"} className="not_found_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound;
