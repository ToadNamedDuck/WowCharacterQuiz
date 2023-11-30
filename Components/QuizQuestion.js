'use client'

import { useState } from "react";

export default function QuizQuestion({ QuestionClassObj, questionArray, answerArray }) {

    const [currentSelectedAnswer, setAnswer] = useState(answerArray[questionArray.indexOf(QuestionClassObj)])
    let count = -1;
    return <>
        {
            QuestionClassObj !== undefined || QuestionClassObj !== null ?
                <div className="individualQuestion">
                    <h1>Let's ask about your playstyle preferences!</h1>
                    <h3>{QuestionClassObj.qText}</h3>
                    <div className="choices">
                        {
                            QuestionClassObj.qChoices.map(choice => {
                                count++;
                                return <div key={QuestionClassObj.qText + `-${count}`}>
                                {
                                    currentSelectedAnswer === count ?
                                    <div className="labelRadioCombo">
                                        <label htmlFor={"Q-" + count}>{choice}</label>
                                        <input
                                            type="radio"
                                            id={"Q-" + count}
                                            name={QuestionClassObj.qText}
                                            value={count}
                                            onChange={(e) => {
                                                QuestionClassObj.stateSetter(parseInt(e.target.value))
                                                setAnswer(parseInt(e.target.value))
                                            }}
                                            defaultChecked={true}
                                        />
                                    </div>
                                        :
                                        <div className="labelRadioCombo">
                                        <label htmlFor={"Q-" + count}>{choice}</label>
                                        <input
                                            type="radio"
                                            id={"Q-" + count}
                                            name={QuestionClassObj.qText}
                                            value={count}
                                            onChange={(e) => {
                                                QuestionClassObj.stateSetter(parseInt(e.target.value))
                                                setAnswer(parseInt(e.target.value))
                                            }}
                                        />
                                    </div>
                                }
                                </div>
                            })
                        }
                    </div>
                </div>
                :
                ""
        }
    </>
}