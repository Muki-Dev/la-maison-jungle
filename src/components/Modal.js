import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen,onClose,item }) => {
    if(!isOpen) return null
    return(
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='modal-close' onClick={onClose}>X</button>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
            </div>
        </div>
    )
}

export default Modal