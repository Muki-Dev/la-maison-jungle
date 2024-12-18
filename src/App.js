import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import logo from './assets/logo.png'


function App() {
  return (
    <div>
       <Banner>
          <img className='lmj-logo' src ={logo} alt='lmj-logo' />
          <h1 className='lmj-title'>La maison Jungle</h1>
       </Banner>
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;
