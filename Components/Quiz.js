'use client'

import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import FBButtons from "./FBButtons";

export default function Quiz({questionArray}){
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [backActive, setBackActive] = useState(false);
    const [forwardActive, setForwardActive] = useState(true);
    const [showFinish, setShowFinish] = useState(false);

    useEffect(() => {
        if(currentQuestion === 0){
            if(backActive !== false){
                setBackActive(false);
            }
        }
        else if(currentQuestion === questionArray.length){
            if(forwardActive !== false){
                setForwardActive(false)
            }
        }
        else{
            setBackActive(true)
            setForwardActive(true)
        }
    },[currentQuestion])


    function backButtonOnClick(e){
        console.log("Going Back")
        e.preventDefault();
        setCurrentQuestion(currentQuestion-1)
        console.log(currentQuestion)
    }

    function forwardButtonOnClick(e){
        console.log("Going Forward")
        e.preventDefault();
        setCurrentQuestion(currentQuestion+1)
        console.log(currentQuestion)
    }

    return <>
    <div id="QuizContainer">
        <h1>Let's ask about your playstyle preferences!</h1>
        {
            questionArray.map(question => {
                return <QuizQuestion key={`Question-${questionArray.indexOf(question)}`} QuestionClassObj={question}/>
            })
        }
        <div id="QuizButtonContainer">
            <FBButtons direction={"back"} onClick={backButtonOnClick} activeState={backActive}/>
            <FBButtons direction={"forward"} onClick={forwardButtonOnClick} activeState={forwardActive}/>
        </div>
    </div>
    </>
}