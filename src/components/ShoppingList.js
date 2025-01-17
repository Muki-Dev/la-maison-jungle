import { useDispatch,useSelector } from "react-redux";
import { addToCart, removeToCart } from "../features/CartSlice";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";


function ShoppingList() {
  const dispatch = useDispatch();
  const activeCategories = useSelector((state) => state.category.activeCategories)

  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

 
  return (
    <div className="lmj-shopping-list">
       <Categories
        categories={categories}
      />  

      <ul className="lmj-plant-list">
        {plantList
          .filter(
            ({ category }) =>
              activeCategories.length === 0 || activeCategories.includes(category)
          )
          .map(({ cover, name, id, light, water, price,description }) => (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                id={id}
                light={light}
                water={water}
                description={description}
              />
              <button className="btn-add" onClick={() => dispatch(addToCart({id, name, price}))}>Ajouter</button>
              <button className="btn-remove" onClick={() => dispatch(removeToCart(id))}>Supprimer</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
