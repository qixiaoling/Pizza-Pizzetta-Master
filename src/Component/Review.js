import React, {useState} from 'react';
import './Review.css';
import ReviewCard from "./ReviewCard";

function Review() {

    return (
        <div className='review-container'>
            <div className='review-title'>
                <h2>Customers Said</h2>
            </div>
            <ReviewCard/>
        </div>
    )
}

export default Review