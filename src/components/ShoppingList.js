import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import Modal from "./Modal";
import "../styles/ShoppingList.css";



function ShoppingList({ cart, updateCart,items=[]}) {
  const [activeCategory, setActiveCategory] = useState([]);

  const [selectedItem,setSelectedItem] = useState(null);

  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    console.log("Item sélectionné :", item);
    setSelectedItem(item);
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  function addToCart(id, name, price) {
    const plantSaved = cart.find((plant) => plant.id === id);
    if (plantSaved) {
      const filteredPlantSaved = cart.filter((plant) => plant.id !== id);
      updateCart([
        ...filteredPlantSaved,
        { id, name, price, amount: plantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { id, name, price, amount: 1 }]);
    }
  }

  function deleteCart(id) {
    const newCart = cart.filter((plant) => plant.id !== id);
    updateCart(newCart); // Supprime l'article du panier
  }

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
      <ul className="plant-list">
            {items && items.length > 0 ? (
            items.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              <img src={item.cover} alt={item.name} style={{ width: '50px' }} />
              {item.name}
            </li>
          ))
        ) : (
          <p>Aucune plante disponible.</p>
        )}
      </ul>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        item={selectedItem} 
        />

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
          .map(({ cover, name, id, light, water, price }) => (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                id={id}
                light={light}
                water={water}
              />
              <button onClick={() => addToCart(id, name, price)}>Ajouter</button>
              <button onClick={() => deleteCart(id)}>Supprimer</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
