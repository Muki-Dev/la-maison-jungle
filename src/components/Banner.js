import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/AuthSlice";
import "../styles/Banner.css";

function Banner({ children }) {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  const handleUserProfil = () => {
    navigate('/userProfil')
  }

  return (
    <div className="lmj-banner">
    {children}
    <nav>
      {isSignedIn ? (
        <>
            <button onClick={handleLogout} className="lmj-button">
              Déconnexion
            </button>
            <button onClick={handleUserProfil} className="lmj-button">Modifier mon Profile</button>
            
        </>
       
      ) : (
        <>
          <button onClick={() => navigate("/login")} className="lmj-button">
            Connexion
          </button>
          <button onClick={() => navigate("/register")} className="lmj-button">
            Inscription
          </button>
        </>
      )}
    </nav>
  </div>
  );
}

export default Banner;

