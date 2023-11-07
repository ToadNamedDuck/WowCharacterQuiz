'use client'

import { useEffect, useState } from "react";
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

class PlayableClass {
  name = "";
  classIcon = "";
  position;
  isComplex;
  isShiny;
  isFlexible;//All 3 roles
  canHeal;

  constructor(className, classIconLocation, combatPosition, lotOfButtons, isShinyBool, isFlexibleBool, canHealBool){
    this.name = className;
    this.classIcon = classIconLocation;
    this.position = combatPosition;
    this.isComplex = lotOfButtonsBool;
    this.isShiny = isShinyBool;
    this.isFlexible = isFlexibleBool;
    this.canHeal = canHealBool;
  }//Maybe an array of specs - each spec can fit a certain critera like many or few buttons etc.
}

const DeathKnight = new PlayableClass("Death Knight", "CLASS_Death-Knight.png", Position.Melee, LotsOfButtons.Yes, false, false, false);
const DemonHunter = new PlayableClass("Demon Hunter", "CLASS_Demon-Hunter.png", Position.Melee, LotsOfButtons.No, false, false, false);
const Druid = new PlayableClass("Druid", "CLASS_Druid.png", Position.Both, LotsOfButtons.Yes, true, true, true);
const Evoker = new PlayableClass("Evoker", "CLASS_Evoker.png", Position.Ranged, LotsOfButtons.SpecDependent, true, false, true);
const Hunter = new PlayableClass("Hunter", "CLASS_Hunter.png", Position.Both, LotsOfButtons.SpecDependent, false, false, false);
const Mage = new PlayableClass("Mage", "CLASS_Mage.png", Position.Ranged, LotsOfButtons.Yes, true, false, false);
const Monk = new PlayableClass("Monk", "CLASS_Monk.png", Position.Melee, LotsOfButtons.Yes, false, true, true);
const Paladin = new PlayableClass("Paladin", "CLASS_Paladin.png", Position.Melee, LotsOfButtons.SpecDependent, true, true, true);
const Priest = new PlayableClass("Priest", "CLASS_Priest.png", Position.Ranged, LotsOfButtons.Yes, true, false, true);
const Rogue = new PlayableClass("Rogue", "CLASS_Rogue.png", Position.Melee, LotsOfButtons.Yes, false, false, false);
const Shaman = new PlayableClass("Shaman", "CLASS_Shaman.png", Position.Both, LotsOfButtons.Yes, true, false, true);
const Warlock = new PlayableClass("Warlock", "CLASS_Warlock.png", Position.Ranged, LotsOfButtons.SpecDependent, false, false, false);
const Warrior = new PlayableClass("Warrior", "CLASS_Warrior.png", Position.Melee, LotsOfButtons.SpecDependent, false, false, false);

class Faction{
  static Alliance = new Faction("Alliance");
  static Horde = new Faction("Horde");
  static Both = new Faction("Both");

  constructor(name){
    this.name = name;
  }
}

export class Position{
  static Melee = new Position("Melee");
  static Ranged = new Position("Ranged");
  static Both = new Position("Both");

  constructor(name){
    this.name = name;
  }
}

class LotsOfButtons{
  static Yes = new LotsOfButtons("Yes");
  static No = new LotsOfButtons("No")
  static SpecDependent = new LotsOfButtons("SpecDependent");

  constructor(name){
    this.name = name;
  }
}

class PlayableRace {
  name = "";
  raceIcon = "";
  validClasses = [];
  faction;
  isShiny;
  isHairy;
  isTall;

  constructor(raceName, raceIconLocation, classArray, faction, isShinyBool, isHairyBool, isTallBool){
    this.name = raceName;
    this.raceIconLocation = raceIconLocation;
    this.validClasses = classArray;
    this.faction = faction;
    this.isShiny = isShinyBool;
    this.isHairy = isHairyBool;
    this.isTall = isTallBool;
  }
}

export default function Home() {
  const [q1Answer, setQ1Answer] = useState(0);
  const [q2Answer, setQ2Answer] = useState(0);
  const [q3Answer, setQ3Answer] = useState(0);
  const [q4Answer, setQ4Answer] = useState(0);
  const [q5Answer, setQ5Answer] = useState(0);
  const [q6Answer, setQ6Answer] = useState(0);
  const [q7Answer, setQ7Answer] = useState(0);
  const q1 = new Question("Do you have a preference for Alliance or Horde?", ["For the Alliance!", "For the Horde!", "I don't care who pays me."], setQ1Answer);
  const q2 = new Question("Do you prefer ranged or melee today?", ["Yes, definitely", "I'm not a coward", "Actually, I'm a healer.", "I just want to see something die."], setQ2Answer);
  const q3 = new Question("Do you want to think and press a lot of buttons while you play?", ["Complex classes are for me", "Hell no", "Next question please."], setQ3Answer);
  const q4 = new Question("Is your aesthetic shiny and bright, or more muted?", ["Definitely shiny. I am the best.", "I like it dark and depressing.", "Still don't care."], setQ4Answer);
  const q5 = new Question("Do you care if your character is hairy?", ["I would prefer them to be covered in it.", "Not very, please.", "No preference."], setQ5Answer);
  const q6 = new Question("Do you prefer your character be taller or shorter, or don't care?", ["I look down on others.", "I like to bite ankles.", "Don't care."], setQ6Answer);
  const q7 = new Question("Should your class be flexible, or only one to two roles tops?", ["As flexible as possible", "I like doing damage and that's it.", "Doesn't matter, give me something."], setQ7Answer);

  const questionArray = [q1, q2, q3, q4, q5, q6, q7];
  const [answerArray, setAnswerArray] = useState([q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer]);

  useEffect(() => {
    setAnswerArray([q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer])
  },[q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer])


  return <>
    <h1>WoW</h1>
    <Quiz questionArray={questionArray} />
    <CRHighlightTable/>
  </>
}