import React, {useState} from 'react';

function SingleQuestion({title, info}){
    const [isQuestionOpen, setIsQuestionOpen] = useState(false)
     const toggleQuestion = () => {
        setIsQuestionOpen(!isQuestionOpen);
    }

    return (
        <div className='single-question'>
            <div className='single-title'>
                <p>{title}</p>
                <button onClick={toggleQuestion}>
                    {
                        isQuestionOpen ? <span><i className="fas fa-minus"></i></span>
                            : <span><i className="fas fa-plus"></i></span>
                    }
                </button>
            </div>
            <div className={`${isQuestionOpen ? 'single-info show-info' : 'single-info'}`}>
                <p>{info}</p>
            </div >



        </div>

    )
}
export default SingleQuestion;