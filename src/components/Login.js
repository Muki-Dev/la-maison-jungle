import React, { useState } from "react";
import { login } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/Auth.css";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(login());
        navigate('/');
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className="auth-container">
            <h2>Connexion</h2>
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
                <button onClick={handleLogin} type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;
