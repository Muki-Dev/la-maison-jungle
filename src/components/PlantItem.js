import { useState } from "react";
import ReactDOM from "react-dom";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, water, description }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleItemClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <li className="lmj-plant-item" key={id} onClick={handleItemClick}>
                <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType="light" scaleValue={light} />
                    <CareScale careType="water" scaleValue={water} />
                </div>
            </li>

            {isModalOpen && ReactDOM.createPortal(
                <div className="modal">
                    <div className="modal-content">
                        <h2>{name}</h2>
                        <img src={cover} alt={`${name} cover`} style={{ width: "100%" }} />
                        <p><strong>Light Level:</strong> {light}</p>
                        <p><strong>Water Level:</strong> {water}</p>
                        <p><strong>Description:</strong> {description}</p>
                        <button onClick={handleCloseModal}>Fermer</button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}

export default PlantItem;
