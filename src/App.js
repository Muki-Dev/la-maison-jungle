import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import logo from './assets/logo.png'
import Footer from './components/Footer';


function App() {
  return (
    <div>
       <Banner>
          <img className='lmj-logo' src ={logo} alt='lmj-logo' />
          <h1 className='lmj-title'>La maison Jungle</h1>
       </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
