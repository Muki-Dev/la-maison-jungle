import React, { useState } from "react";
import { login } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/Auth.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Pour afficher les erreurs

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Réinitialise l'erreur avant chaque tentative

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST", // Spécifie la méthode POST
        headers: {
          "Content-Type": "application/json", // Indique que les données sont au format JSON
        },
        body: JSON.stringify({ email, password }), // Convertit les données en JSON
      });

      if (!response.ok) {
        // Gère les erreurs HTTP (ex: 400, 401, 500, etc.)
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de la connexion.");
      }

      const data = await response.json(); // Parse la réponse JSON

      // Stocke le token dans localStorage
      localStorage.setItem("token", data.token);

      // Mets à jour le state Redux pour indiquer que l'utilisateur est connecté
      dispatch(
        login({
          email: data.user.email,
          token: data.token,
        })
      );

      // Redirige l'utilisateur après connexion
      navigate("/");
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Réessayez.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
