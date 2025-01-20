import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { logout } from '../features/userSlice';
import "../styles/Banner.css";

function Banner({ children }) {
  const dispatch = useDispatch();
const navigate = useNavigate() 

  const handleLogout = () => {
      dispatch(logout());
      navigate('/login'); // Redirige vers la page de connexion
  };

  return (
    <div className="lmj-banner">
      <div className="lmj-banner-title">{children}</div>
      <nav className="lmj-banner-nav">
        <Link to="/login" className="lmj-link">Connexion</Link>
        <Link to="/register" className="lmj-link">Inscription</Link>
        <button onClick={handleLogout}>Déconnexion</button> 
      </nav>
    </div>
  );
}

export default Banner;

