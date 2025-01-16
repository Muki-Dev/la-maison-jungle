import { Provider } from 'react-redux';
import store from './app/store';
import { useState } from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import logo from './assets/logo.png'
import Footer from './components/Footer';
import './styles/Layout.css';

function App() {
  const [cart,updateCart] = useState([])
  return (
    <Provider store={store}>
      <div>
        <Banner>
            <img className='lmj-logo' src ={logo} alt='lmj-logo' />
            <h1 className='lmj-title'>La maison Jungle</h1>
        </Banner> 
        <div className='lmj-layout-inner'>
            <Cart cart={ cart } updateCart={ updateCart } />
            <ShoppingList  cart={ cart } updateCart={ updateCart } />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
