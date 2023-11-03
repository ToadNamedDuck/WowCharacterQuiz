'use client'

import { useState } from "react";
import Quiz from "../../Components/Quiz";
import "styles.css"

export class Question {
  qText = "";
  qChoices = [];
  stateSetter;
  constructor(questionText, choices, stateSetterFunction) {
    this.qText = questionText;
    if (choices !== null || choices !== undefined) {
      choices.map(choice => {
        this.qChoices.push(choice);
      });
    }
    this.stateSetter = stateSetterFunction;
  }
}

// const [q1Answer, setQ1Answer] = useState(0);
// const [q2Answer, setQ2Answer] = useState(0);
// const [q3Answer, setQ3Answer] = useState(0);
// const [q4Answer, setQ4Answer] = useState(0);
// const answerStateSetters = [setQ1Answer, setQ2Answer, setQ3Answer, setQ4Answer];
// Refactor Quiz component to accept array of state setters.
// Quiz component will need to use the position of setters in array to assign a setter to question. I could also include a state setter in the class def tho.

const q1 = new Question("Do you have a preference for Alliance or Horde?", ["For the Alliance!", "For the Horde!", "I don't care who pays me."]);
const q2 = new Question("Do you prefer ranged or melee today?", ["Yes, definitely", "I'm not a coward", "I just want to see something die."]);
const q3 = new Question("Do you want to think and press a lot of buttons while you play?", ["Complex classes are for me", "Hell no", "Next question please."]);
const q4 = new Question("Is your aesthetic shiny and bright, or more muted?", ["Definitely shiny. I am the best.", "I like it dark and depressing.", "Still don't care."]);
const questionArray = [q1, q2, q3, q4];

export default function Home() {
  return <>
    <h1>WoW</h1>
    <Quiz questionArray={questionArray}/>
  </>
}