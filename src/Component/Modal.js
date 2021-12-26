import React, {useContext} from 'react';
import './Modal.css';
import {ModalContext} from "../AppContext";
import {Link as LinkR} from 'react-router-dom';

function Modal() {
    const {isModalOpen, closeModal} = useContext(ModalContext)
    return (
        <div className={`${isModalOpen ? 'modal-section-overlay show-modal' : 'modal-section-overlay'}`}>
            <div className='modal-container'>
                <div className='modal-title'>
                    <p>Welcome to place order.</p>
                    <button
                        type='button'
                        className='modal-close-btn'
                        onClick={closeModal}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className='modal-content'>
                    <p>0800-123456</p>
                    <LinkR
                        type='button'
                        className='modal-question-btn'
                        to='/question'
                    >
                        Q&A's
                    </LinkR>
                </div>
            </div>

        </div>
    )
}

export default Modal;