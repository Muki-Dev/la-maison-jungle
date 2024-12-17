import '../styles/Cart.css'
function Cart(){
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowersPrice = 20;
    const total = monsteraPrice + ivyPrice + flowersPrice
    return(
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monstera:{monsteraPrice}£</li>
                <li>ivyPrice:{ivyPrice}£</li>
                <li>bouquet de fleur:{flowersPrice}£</li>
            </ul>
            <h3>total: {total}£</h3>
        </div>
    )
}

export default Cart;