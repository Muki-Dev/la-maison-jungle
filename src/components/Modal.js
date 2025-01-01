import React from "react";
import '../styles/Modal.css'
const Modal = ({ isOpen, onClose, item }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>×</button>
          {item && (
            <>
              <h2>{item.name}</h2>
              <img src={item.cover} alt={item.name} style={{ width: '100%' }} />
              <p>{item.description}</p>
              <p>Prix : {item.price}€</p>
            </>
          )}
        </div>
      </div>
    );
  };

  export default Modal