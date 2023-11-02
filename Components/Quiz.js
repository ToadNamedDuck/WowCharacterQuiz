'use client'

import { Question } from "@/app/page";
import QuizQuestion from "./QuizQuestion";

export default function Quiz(){
    const q1 = new Question(0, "Hello", ["yes", "no", "goodbye"]);
    const q2 = new Question(1, "Do you prefer ranged or melee today?", ["Yes, definitely", "I'm not a coward", "I don't care"])
    const questionArray = [q1, q2];
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