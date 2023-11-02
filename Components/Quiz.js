'use client'

import QuizQuestion from "./QuizQuestion";

export default function Quiz({questionArray}){
    return <>
    <div>
        <h1>Let's ask about your playstyle preferences!</h1>
        {
            questionArray.map(question => {
                return <QuizQuestion key={`Question-${questionArray.indexOf(question)}`} QuestionClassObj={question}/>
            })
        }
    </div>
    </>
}