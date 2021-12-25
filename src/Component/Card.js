import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <article className='card-container'>
            <img className='card-img' src={props.img} alt={props.name}/>
            <p className='card-title'>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button className='btn'>
                Add to Cart
            </button>

        </article>
    )
}
export default Card;