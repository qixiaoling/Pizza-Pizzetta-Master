import React, {useState} from 'react';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import SingleQuestion from "../Component/SingleQuestion";
import data from "../Assets/QuestionData";
import '../pages/Question.css'

function Question(){
    const [questions, setQuestions] = useState(data)

    return (
        <>
            <Navbar/>
            <section className='question-section'>
                <div className='section-center'>
                    <div className='question-title-container'>
                        <h3>
                            Most Asked Questions
                        </h3>
                    </div>
                    <div className='question-content-container'>
                        {questions.map((question)=>{
                            return(
                                <SingleQuestion
                                    {...question}
                                    key={question.id}
                                />
                            )
                        })}
                    </div>

                </div>

            </section>
            <Footer/>
        </>

    )
}
export default Question;