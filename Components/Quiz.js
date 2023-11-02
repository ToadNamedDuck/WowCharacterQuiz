'use client'

import { Question } from "@/app/page";
import QuizQuestion from "./QuizQuestion";

export default function Quiz(){
    const q1 = new Question("Do you have a preference for Alliance or Horde?", ["For the Alliance!", "For the Horde!", "I don't care who pays me."]);
    const q2 = new Question("Do you prefer ranged or melee today?", ["Yes, definitely", "I'm not a coward", "I just want to see something die."]);
    const q3 = new Question("Do you want to think and press a lot of buttons while you play?", ["Complex classes are for me", "Hell no", "Next question please."]);
    const q4 = new Question("Is your aesthetic shiny and bright, or more muted?", ["Definitely shiny. I am the best.", "I like it dark and depressing.", "Still don't care."]);
    const questionArray = [q1, q2, q3, q4];
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