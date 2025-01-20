import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/Actions";
import "../styles/Banner.css";

function Banner({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
      dispatch(logout());
      navigate('/login')
  }
  
  return (
    <div className="lmj-banner">
      <div className="lmj-banner-title">{children}</div>
      <nav className="lmj-banner-nav">
        <Link to="/login" className="lmj-link">Connexion</Link>
        <Link to="/register" className="lmj-link">Inscription</Link>
        <button onClick={handleLogout}>Deconnexion</button>
      </nav>
    </div>
  );
}

export default Banner;
