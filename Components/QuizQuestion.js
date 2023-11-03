'use client'

import { useEffect, useState } from "react";

export default function QuizQuestion({ QuestionClassObj }) {
    const [selectedAnswer, setAnswer] = useState(0);

    useEffect(() => {

    }, [selectedAnswer])

    let count = -1;
    return <>
        {
            QuestionClassObj !== undefined || QuestionClassObj !== null ?
                <div class="individualQuestion">
                    <h3>{QuestionClassObj.qText}</h3>
                    <div class="choices">
                        {
                            QuestionClassObj.qChoices.map(choice => {
                                count++;
                                return <>
                                {
                                    count === 0?
                                    <div class="labelRadioCombo">
                                        <label htmlFor={"Q-" + count}>{choice}</label>
                                        <input
                                            type="radio"
                                            id={"Q-" + count}
                                            name={QuestionClassObj.qText}
                                            key={QuestionClassObj.qText + `-${count}`}
                                            value={count}
                                            onChange={(e) => setAnswer(parseInt(e.target.value))}
                                            defaultChecked={true}
                                        />
                                    </div>
                                        :
                                        <div class="labelRadioCombo">
                                        <label htmlFor={"Q-" + count}>{choice}</label>
                                        <input
                                            type="radio"
                                            id={"Q-" + count}
                                            name={QuestionClassObj.qText}
                                            key={QuestionClassObj.qText + `-${count}`}
                                            value={count}
                                            onChange={(e) => setAnswer(parseInt(e.target.value))}
                                        />
                                    </div>
                                }
                                </>
                            })
                        }
                    </div>
                </div>
                :
                ""
        }
    </>
}