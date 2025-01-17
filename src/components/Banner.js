import { Link } from "react-router-dom";
import "../styles/Banner.css";

function Banner({ children }) {
  return (
    <div className="lmj-banner">
      {children}
      <div className="lmj-nav-links">
        <Link to="/login" className="lmj-link">Connexion</Link>
        <Link to="/register" className="lmj-link">Inscription</Link>
      </div>
    </div>
  );
}

export default Banner;
