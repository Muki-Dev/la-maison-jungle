import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import '../styles/ShoppingList.css';

function ShoppingList({cart,updateCart}){
    const categories = plantList.reduce((acc,elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category), []
    )

    function addToCart(name,price){
        const plantSaved = cart.find((plant) => plant.name === name )
        if(plantSaved){
            const filteredPlantSaved = cart.filter((plant) => plant.name !== name)
            updateCart([...filteredPlantSaved,{name,price,amount: plantSaved.amount + 1}])
        }else{
            updateCart([...cart,{name,price,amount:1}])
        }
    }
    return(
        <div>
            <ul>
                    {
                        categories.map((cat) => (
                            <li key={cat}>{cat}</li>
                        ))
                    }
            </ul>
            <ul className="lmj-plant-list">
                {
                    plantList.map(({cover,name,id,light,water,price}) => (
                       <div key={id}>
                            <PlantItem cover={cover} name={name} id={id} light={light} water={water} />
                            <button onClick={() => addToCart(name,price)}>Ajouter</button>
                       </div> 
                        
                    ))
                   
                }
            </ul>
        </div>
       
    )
}

export default ShoppingList