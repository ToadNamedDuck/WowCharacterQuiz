'use client'

import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import FBButtons from "./FBButtons";
import ConfirmChoices from "./ClassRaceTable/ConfirmChoices";

export default function Quiz({ questionArray, classGrayedOutStates, raceGrayedOutStates }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [backActive, setBackActive] = useState(false);
    const [forwardActive, setForwardActive] = useState(true);
    const [showFinish, setShowFinish] = useState(false);

    useEffect(() => {
        setShowFinish(false);
        if (currentQuestion === 0) {
            if (backActive !== false) {
                setBackActive(false);
            }
        }
        else if (currentQuestion === (questionArray.length - 1)) {
            if (forwardActive !== false) {
                setForwardActive(false)
                setShowFinish(true);
            }
        }
        else {
            setBackActive(true)
            setForwardActive(true)
        }
    }, [currentQuestion])


    function backButtonOnClick(e) {
        e.preventDefault();
        setCurrentQuestion(currentQuestion - 1)
    }

    function forwardButtonOnClick(e) {
        e.preventDefault();
        setCurrentQuestion(currentQuestion + 1)
    }

    return <>
        <div id="QuizContainer">
            <h1>Let's ask about your playstyle preferences!</h1>
            {
                <QuizQuestion key={`Question-${currentQuestion}`} QuestionClassObj={questionArray[currentQuestion]} />
            }
            {
                showFinish === false?
                <div id="QuizButtonContainer">
                    <FBButtons direction={"back"} onClick={backButtonOnClick} activeState={backActive} />
                    <FBButtons direction={"forward"} onClick={forwardButtonOnClick} activeState={forwardActive} />
                </div>
                :
                <div id="QuizButtonContainer">
                    <FBButtons direction={"back"} onClick={backButtonOnClick} activeState={backActive} />
                    <ConfirmChoices classGrayedOutStates={classGrayedOutStates} raceGrayedOutStates={raceGrayedOutStates}/>
                    <FBButtons direction={"forward"} onClick={forwardButtonOnClick} activeState={forwardActive} />
                </div>
            }
        </div>
    </>
}