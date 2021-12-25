import React from 'react';
import Card from "./Card";
import './PizzaInfo.css'
import {desserts} from '../Assets/ProductData'

function DessertInfo() {
    return(
        <div className='pizzaInfo-container' id='dessert'>
            <h2>Sweet Treats for You</h2>
            <div className='pizzaInfo-card'>
                {desserts.map((dessert)=>{
                    const {id, img, name, description, price} = dessert;
                    return(
                        <Card key={id}
                              name={name}
                              description={description}
                              price={price}
                              img={img}
                        />
                    )
                })}
            </div>

        </div>
    )
}
export default DessertInfo