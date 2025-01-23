import { Link } from "react-router-dom";
import "../styles/Banner.css";

function Banner({ children }) {
  return (
    <div className="lmj-banner">
      <div className="lmj-banner-title">{children}</div>
      <nav className="lmj-banner-nav">
        <Link to="/login" className="lmj-link">Connexion</Link>
        <Link to="/register" className="lmj-link">Inscription</Link> 
      </nav>
    </div>
  );
}

export default Banner;

