import React, {useState, useContext, useEffect} from 'react';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import './Navbar.css'
import {ModalContext} from "../AppContext";
import {useHistory} from "react-router-dom";

function Navbar () {

    const [links, toggleLinks] = useState(false);
    const {openModal, closeModal} = useContext(ModalContext);
    const history = useHistory();

    useEffect(()=>{
        console.log("this pag is now"+ history.location.pathname)
    },[])

    function toggleClasses() {
        let classes = 'navLinks';
        if (links){
            classes += ' active'
        }
        return classes;
    }

    function closeMobileMenu() {
        toggleLinks(false);
    }

    return(
        <nav className='navbar-container'>
            <LinkR to="/" className='navbar-logo'>
                <h3 id="nav-logo">Pizza Pizzetta</h3>
            </LinkR>
            <div className='pizza-logo' onClick={() =>
            {
                toggleLinks(!links);
                closeModal();
            }}>
                <i className= "fas fa-pizza-slice"></i>
            </div>
            <ul className={toggleClasses()}>
                <div className='sidebar-close-logo' onClick={() => toggleLinks(!links)}>
                    <i className="fas fa-times"></i>
                </div>
                <ul className='links-wrapper'>
                    <li className='link'>
                    {
                        history.location.pathname === "/"?
                            (<LinkS to='pizza' smooth={true} duration={500} onClick={closeMobileMenu} className='router-menu'>Pizza</LinkS>)
                            :
                            (<LinkR to='/' onClick={closeMobileMenu} className='router-menu'>Pizza</LinkR>)
                    }
                    </li>
                    <li className='link'>
                        {
                            history.location.pathname === "/"?
                                (<LinkS to='dessert' smooth={true} duration={500} onClick={closeMobileMenu} className='router-menu'>Dessert</LinkS>)
                                :
                                (<LinkR to='/' onClick={closeMobileMenu} className='router-menu'>Dessert</LinkR>)
                        }
                    </li>
                    <li className='link'>
                        {
                            history.location.pathname === "/"?
                                (<LinkS to='daily-special' smooth={true} duration={500} offset={-80} onClick={closeMobileMenu} className='router-menu'>Daily Special</LinkS>)
                                :
                                (<LinkR to='/' onClick={closeMobileMenu} className='router-menu'>Daily Special</LinkR>)
                        }
                    </li>
                    <li className='link'>
                        <LinkR to='/gallery' className='router-menu' onClick={closeMobileMenu}>Gallery</LinkR>
                    </li>
                    <li className='link'>
                        <LinkR to='/own-pizza' className='router-menu' onClick={closeMobileMenu}>Makes up yr own</LinkR>
                    </li>
                    <li className='link'>
                        <LinkR to='/menu' className='router-menu' onClick={closeMobileMenu}>Full Menu</LinkR>
                    </li>
                </ul>

                <button className="btn menu-btn" onClick={()=>{
                    openModal();
                    closeMobileMenu()
                }}>Place Order</button>


            </ul>

        </nav>
    )
}
export default Navbar