import React, {useState} from 'react';
import './FullMenu.css';
import Categories from "./Categories";
import Menu from "./Menu";
import {menu} from '../fullMenu/menu-data'

import Modal from "../../Component/Modal";
import Navbar from "../../Component/Navbar";

const allCategories = ['all',...new Set(menu.map((item)=>item.category))]

function FullMenu() {
    const[categories, setCategories]=useState(allCategories)
    const [menuItems, setMenuItems] = useState(menu);



    function filterItems (category) {
        if (category === 'all'){
           setMenuItems(menu);
           return;
        }

        const newItems = menu.filter((menu)=>
            menu.category === category
        )
        return setMenuItems(newItems);

    }

    return(
        <>
            <Navbar/>
            <div className='full-menu-container'>
                <h1 className='menu-title'>Our Menu</h1>
                <div className='menu-content'>
                    <Categories categories={categories} filterItems={filterItems}/>
                    <Menu menuItems={menuItems}/>
                </div>
            </div>
            <Modal/>
        </>

    )
}
export default FullMenu;