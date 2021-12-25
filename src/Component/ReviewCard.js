import React, {useState} from 'react';
import {reviews} from "../Assets/ProductData";
function ReviewCard() {
    const [index, setIndex] = useState(0);
    const {name, job, img, text} = reviews[index];
    function checkNumber(number){
        if(number > reviews.length-1 ){
           return 0;
        }
        if(number < 0) {
            return reviews.length-1;
        }
        return number;
    }
    function nextPerson(){
        setIndex((index)=>{
            let changedIndex = index + 1;
            return checkNumber(changedIndex);
            }
        )
    }
    function prevPerson(){
        setIndex((index)=>{
            let changedIndex = index - 1;
            return checkNumber(changedIndex);
            }
        )
    }
    return(
        <article className='review-body'>
            <div className="review-img-container">
                <img src={img} alt={name}
                     className="review-img"/>
            </div>
            <p className="review-name">{name}</p>
            <p className="review-text">{text}</p>
            <p className="review-job-title">{job}</p>
            <div className="review-btn-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </article>
    )
}
export default ReviewCard;
