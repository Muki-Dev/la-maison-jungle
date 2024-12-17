import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css'

function ShoppingList(){
    const categories = plantList.reduce((acc,elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category), []
    )
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
                    plantList.map((plant) => (
                        <li className="lmj-plant-item" key={plant.id}>
                            {plant.name}
                            {plant.bestSale ? <div className="lmj-sales">soldes</div> : null}
                        </li>
                    ))
                }
            </ul>
        </div>
       
    )
}

export default ShoppingList