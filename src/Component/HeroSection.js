import React, {useContext} from "react";
import './HeroSection.css'
import Navbar from "./Navbar";
import Modal from "./Modal";
import {ModalContext} from "../AppContext";

function HeroSection() {
    const { openModal} = useContext(ModalContext);

    return (
        <section className='hero-container'>
            <Navbar/>
            <div className='hero-content'>
                <div className='hero-items'>
                    <h1>Greatest Pizza Ever</h1>
                    <p>Ready in 60 seconds</p>
                    <button
                        className='btn'
                        onClick={openModal}
                    >
                        Place Order
                    </button>
                </div>
            </div>
            <Modal/>

        </section>
    )
}

export default HeroSection