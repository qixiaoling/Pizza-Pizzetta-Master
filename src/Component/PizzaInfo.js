import React from 'react';
import Card from "./Card";
import './PizzaInfo.css'
import {pizzas} from '../Assets/ProductData'

function PizzaInfo() {
    return(
        <div className='pizzaInfo-container' id='pizza'>
            <h2>Choose Your Favorite</h2>
            <div className='pizzaInfo-card'>
                {pizzas.map((pizza)=>{
                    const {id, img, name, description, price} = pizza;
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
export default PizzaInfo