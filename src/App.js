import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./app/store";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import logo from "./assets/logo.png";
import "./styles/Layout.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Banner>
            <img className="lmj-logo" src={logo} alt="lmj-logo" />
            <h1 className="lmj-title">La maison Jungle</h1>
          </Banner>
          <Routes>
            <Route
              path="/"
              element={
                <div className="lmj-layout-inner">
                  <Cart />
                  <ShoppingList />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
