'use client'

import { useState } from "react";
import Quiz from "../../Components/Quiz";
import "styles.css"
import CRHighlightTable from "../../Components/ClassRaceTable/CRHighlightTable";

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

export class PlayableClass {
  name = "";
  classIcon = "";
  position;
  //More values here based on the questions we make.


  //Constructor
  constructor(className, classIconLocation, combatPosition)//add Other values to constructor
  {
    this.name = className;
    this.classIcon = classIconLocation;
    this.position = combatPosition;
  }
}

class Faction{
  static Alliance = new Faction("Alliance");
  static Horde = new Faction("Horde");
  static Both = new Faction("Both");

  constructor(name){
    this.name = name;
  }
}

class Position{
  static Melee = new Position("Melee");
  static Ranged = new Position("Ranged");
  static Both = new Position("Both");

  constructor(name){
    this.name = name;
  }
}

export class PlayableRace {
  name = "";
  raceIcon = "";
  validClasses = [];
  faction;
  //more options that correlate to questions.

  //Put a constructor here
  constructor(raceName, raceIconLocation, classArray, faction){
    this.name = raceName;
    this.raceIconLocation = raceIconLocation;
    this.validClasses = classArray;
    this.faction = faction;
  }
}

export default function Home() {
  const [q1Answer, setQ1Answer] = useState(0);
  const [q2Answer, setQ2Answer] = useState(0);
  const [q3Answer, setQ3Answer] = useState(0);
  const [q4Answer, setQ4Answer] = useState(0);
  const q1 = new Question("Do you have a preference for Alliance or Horde?", ["For the Alliance!", "For the Horde!", "I don't care who pays me."], setQ1Answer);
  const q2 = new Question("Do you prefer ranged or melee today?", ["Yes, definitely", "I'm not a coward", "I just want to see something die."], setQ2Answer);
  const q3 = new Question("Do you want to think and press a lot of buttons while you play?", ["Complex classes are for me", "Hell no", "Next question please."], setQ3Answer);
  const q4 = new Question("Is your aesthetic shiny and bright, or more muted?", ["Definitely shiny. I am the best.", "I like it dark and depressing.", "Still don't care."], setQ4Answer);
  const questionArray = [q1, q2, q3, q4];

  return <>
    <h1>WoW</h1>
    <Quiz questionArray={questionArray} />
    <CRHighlightTable/>
  </>
}