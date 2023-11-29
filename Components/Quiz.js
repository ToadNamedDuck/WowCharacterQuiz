'use client'

import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import FBButtons from "./FBButtons";
import ConfirmChoices from "./ClassRaceTable/ConfirmChoices";
import Result from "./Result";
import { Faction } from "@/app/page";

export default function Quiz({ questionArray, classGrayedOutStates, raceGrayedOutStates }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [backActive, setBackActive] = useState(false);
    const [forwardActive, setForwardActive] = useState(true);
    const [showFinish, setShowFinish] = useState(false);
    const [result, setResult] = useState([null, null]);
    const [showResult, setShowResult] = useState(false);

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
        setShowResult(false);
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
                result[0] !== null && showResult !== false ?
                <Result result={result}/>//New Component
                :
                <Result result={[{name: "Death Knight", icon: "CLASS_Death-Knight.png"},{name: "Orc", icon: "RACE_Orc-M.png", faction: Faction.Horde}]} hidden={true}/>//Visibility: Hidden component
            }
            {
                showFinish === false?
                <div id="QuizButtonContainer">
                    <FBButtons direction={"back"} onClick={backButtonOnClick} activeState={backActive} />
                    <ConfirmChoices classGrayedOutStates={classGrayedOutStates} raceGrayedOutStates={raceGrayedOutStates} showSelf={showFinish} setResult={setResult} setShowResult={setShowResult}/>
                    <FBButtons direction={"forward"} onClick={forwardButtonOnClick} activeState={forwardActive} />
                </div>
                :
                <div id="QuizButtonContainer">
                    <FBButtons direction={"back"} onClick={backButtonOnClick} activeState={backActive} />
                    <ConfirmChoices classGrayedOutStates={classGrayedOutStates} raceGrayedOutStates={raceGrayedOutStates} showSelf={showFinish} setResult={setResult} setShowResult={setShowResult}/>
                    <FBButtons direction={"forward"} onClick={forwardButtonOnClick} activeState={forwardActive} />
                </div>
            }
        </div>
    </>
}