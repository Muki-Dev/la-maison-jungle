import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../features/CartSlice";
import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const [activeCategory, setActiveCategory] = useState([]);
  const dispatch = useDispatch();

  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  const toggleCategory = (category) => {
    if (activeCategory.includes(category)) {
      // Supprimer la catégorie si elle est déjà sélectionnée
      setActiveCategory(activeCategory.filter((cat) => cat !== category));
    } else {
      // Ajouter la catégorie si elle n'est pas encore sélectionnée
      setActiveCategory([...activeCategory, category]);
    }
  };

  return (
    <div className="lmj-shopping-list">
       <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
        onToggle={toggleCategory}
      />  

      <ul className="lmj-plant-list">
        {plantList
          .filter(
            ({ category }) =>
              activeCategory.length === 0 || activeCategory.includes(category)
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
              <button onClick={() => dispatch(addToCart({id, name, price}))}>Ajouter</button>
              <button onClick={() => dispatch(removeToCart(id))}>Supprimer</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
