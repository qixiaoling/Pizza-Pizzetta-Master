import React from 'react';
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

function Menu({menuItems}) {
    return (
        <>
            <div className='menu-container'>
                {menuItems.map((item) => {
                    const {id, title, desc, price, img} = item;
                    return (
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='left-col'/>
                            <div className='right-col'>
                                <div className='right-col-top'>
                                    <p>{title}</p>
                                    <p>${price}</p>
                                </div>
                                <p className='right-col-bottom'>{desc}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
            <Footer/>
        </>

    )
}

export default Menu