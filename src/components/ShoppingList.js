import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import '../styles/ShoppingList.css';

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
                    plantList.map(({cover,name,id,light,water}) => (
                        <PlantItem 
                         cover={cover}
                         name={name}
                         id={id}
                         light={light}
                         water={water}
                        />
                    ))
                }
            </ul>
        </div>
       
    )
}

export default ShoppingList