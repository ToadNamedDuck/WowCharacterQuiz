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

//Races and classes are going to end up needing a list of answers that will cause them to gray out and become unselectable for our final generation.
//Ideally, this is an array of either key value pairs or just values where the index (+1) correlates to the question number
//Also means each image in our table down there will need to be a stateful component, which is fine by me.
export class PlayableClass {
  name = "";
  icon = "";
  position;
  isComplex;
  isFlexible;//All 3 roles
  canHeal;
  grayedOutState;
  grayedOutSetter;

  constructor(className, classIconLocation, combatPosition, lotOfButtons, isFlexibleBool, canHealBool, grayedState, grayedSetter) {
    this.name = className;
    this.icon = classIconLocation;
    this.position = combatPosition;
    this.isComplex = lotOfButtons;
    this.isFlexible = isFlexibleBool;
    this.canHeal = canHealBool;
    this.grayedOutState = grayedState;
    this.grayedOutSetter = grayedSetter;
  }//Maybe an array of specs - each spec can fit a certain critera like many or few buttons etc.
}

export class Position {
  static Melee = new Position("Melee");
  static Ranged = new Position("Ranged");
  static Both = new Position("Both");

  constructor(name) {
    this.name = name;
  }
}

export class LotsOfButtons {
  static Yes = new LotsOfButtons("Yes");
  static No = new LotsOfButtons("No")
  static SpecDependent = new LotsOfButtons("SpecDependent");

  constructor(name) {
    this.name = name;
  }
}

export class Faction {
  static Alliance = new Faction("Alliance");
  static Horde = new Faction("Horde");
  static Both = new Faction("Both");

  constructor(name) {
    this.name = name;
  }
}

export class PlayableRace {
  name = "";
  icon = "";
  validClasses = [];
  faction;
  isHairy;
  isTall;
  grayedOutState;
  grayedOutSetter;

  constructor(raceName, raceIconLocation, classArray, faction, isHairyBool, isTallBool, grayedState, grayedSetter) {
    this.name = raceName;
    this.icon = raceIconLocation;
    this.validClasses = classArray;
    this.faction = faction;
    this.isHairy = isHairyBool;
    this.isTall = isTallBool;
    this.grayedOutState = grayedState;
    this.grayedOutSetter = grayedSetter;
  }
}

export default function Home() {
  const [q1Answer, setQ1Answer] = useState(2);
  const [q2Answer, setQ2Answer] = useState(3);
  const [q3Answer, setQ3Answer] = useState(2);
  const [q5Answer, setQ5Answer] = useState(2);
  const [q6Answer, setQ6Answer] = useState(2);
  const [q7Answer, setQ7Answer] = useState(2);
  const q1 = new Question("Do you have a preference for Alliance or Horde?", ["For the Alliance!", "For the Horde!", "I don't care who pays me."], setQ1Answer);
  const q2 = new Question("Do you prefer ranged or melee today?", ["Far away to send big damage", "I'm not a coward", "Actually, I'm a healer", "IDC"], setQ2Answer);
  const q3 = new Question("Do you want to think and press a lot of buttons while you play?", ["Complex classes are for me", "Hell no", "Next question please."], setQ3Answer);
  const q5 = new Question("Do you care if your character is hairy?", ["I would prefer them to be covered in it.", "Not very, please.", "No preference."], setQ5Answer);
  const q6 = new Question("Do you prefer your character be taller or shorter, or don't care?", ["I look down on others.", "I like to bite ankles.", "Don't care."], setQ6Answer);
  const q7 = new Question("Should your class be flexible, or only 1-2 roles tops?", ["As flexible as possible", "I like my chosen role.", "Doesn't matter, give me something."], setQ7Answer);

  const [dkGray, dkGrayedOutSetter] = useState(false);
  const [dhGray, dhGrayedOutSetter] = useState(false);
  const [druidGray, druidGrayedOutSetter] = useState(false);
  const [evokerGray, evokerGrayedOutSetter] = useState(false);
  const [hunterGray, hunterGrayedOutSetter] = useState(false);
  const [mageGray, mageGrayedOutSetter] = useState(false);
  const [monkGray, monkGrayedOutSetter] = useState(false);
  const [paladinGray, paladinGrayedOutSetter] = useState(false);
  const [priestGray, priestGrayedOutSetter] = useState(false);
  const [rogueGray, rogueGrayedOutSetter] = useState(false);
  const [shamanGray, shamanGrayedOutSetter] = useState(false);
  const [warlockGray, warlockGrayedOutSetter] = useState(false);
  const [warriorGray, warriorGrayedOutSetter] = useState(false);

  const DeathKnight = new PlayableClass("Death Knight", "CLASS_Death-Knight.png", Position.Melee, LotsOfButtons.Yes, false, false, dkGray, dkGrayedOutSetter);
  const DemonHunter = new PlayableClass("Demon Hunter", "CLASS_Demon-Hunter.png", Position.Melee, LotsOfButtons.No, false, false, dhGray, dhGrayedOutSetter);
  const Druid = new PlayableClass("Druid", "CLASS_Druid.png", Position.Both, LotsOfButtons.Yes, true, true, druidGray, druidGrayedOutSetter);
  const Evoker = new PlayableClass("Evoker", "CLASS_Evoker.png", Position.Ranged, LotsOfButtons.SpecDependent, false, true, evokerGray, evokerGrayedOutSetter);
  const Hunter = new PlayableClass("Hunter", "CLASS_Hunter.png", Position.Both, LotsOfButtons.SpecDependent, false, false, hunterGray, hunterGrayedOutSetter);
  const Mage = new PlayableClass("Mage", "CLASS_Mage.png", Position.Ranged, LotsOfButtons.Yes, false, false, mageGray, mageGrayedOutSetter);
  const Monk = new PlayableClass("Monk", "CLASS_Monk.png", Position.Melee, LotsOfButtons.Yes, true, true, monkGray, monkGrayedOutSetter);
  const Paladin = new PlayableClass("Paladin", "CLASS_Paladin.png", Position.Melee, LotsOfButtons.SpecDependent, true, true, paladinGray, paladinGrayedOutSetter);
  const Priest = new PlayableClass("Priest", "CLASS_Priest.png", Position.Ranged, LotsOfButtons.SpecDependent, false, true, priestGray, priestGrayedOutSetter);
  const Rogue = new PlayableClass("Rogue", "CLASS_Rogue.png", Position.Melee, LotsOfButtons.Yes, false, false, rogueGray, rogueGrayedOutSetter);
  const Shaman = new PlayableClass("Shaman", "CLASS_Shaman.png", Position.Both, LotsOfButtons.Yes, false, true, shamanGray, shamanGrayedOutSetter);
  const Warlock = new PlayableClass("Warlock", "CLASS_Warlock.png", Position.Ranged, LotsOfButtons.SpecDependent, false, false, warlockGray, warlockGrayedOutSetter);
  const Warrior = new PlayableClass("Warrior", "CLASS_Warrior.png", Position.Melee, LotsOfButtons.SpecDependent, false, false, warriorGray, warriorGrayedOutSetter);

  const [belfGray, belfGrayedOutSetter] = useState(false);
  const [dIDwarfGray, dIDwarfGrayedOutSetter] = useState(false);
  const [dracGray, dracGrayedOutSetter] = useState(false);
  const [draeneiGray, draeneiGrayedOutSetter] = useState(false);
  const [dwarfGray, dwarfGrayedOutSetter] = useState(false);
  const [gnomeGray, gnomeGrayedOutSetter] = useState(false);
  const [goblinGray, goblinGrayedOutSetter] = useState(false);
  const [hmTaurenGray, hmTaurenGrayedOutSetter] = useState(false);
  const [humanGray, humanGrayedOutSetter] = useState(false);
  const [ktGray, ktGrayedOutSetter] = useState(false);
  const [lfDraeneiGray, lfDraeneiGrayedOutSetter] = useState(false);
  const [magharGray, magharGrayedOutSetter] = useState(false);
  const [mechaGray, mechaGrayedOutSetter] = useState(false);
  const [nelfGray, nelfGrayedOutSetter] = useState(false);
  const [nightborneGray, nightborneGrayedOutSetter] = useState(false);
  const [orcGray, orcGrayedOutSetter] = useState(false);
  const [pandaGray, pandaGrayedOutSetter] = useState(false);
  const [taurenGray, taurenGrayedOutSetter] = useState(false);
  const [trollGray, trollGrayedOutSetter] = useState(false);
  const [undeadGray, undeadGrayedOutSetter] = useState(false);
  const [velfGray, velfGrayedOutSetter] = useState(false);
  const [worgenGray, worgenGrayedOutSetter] = useState(false);
  const [vulperaGray, vulperaGrayedOutSetter] = useState(false);
  const [zandiGray, zandiGrayedOutSetter] = useState(false);

  const nearlyUniversalClasses = [Warrior, Hunter, Mage, Rogue, Priest, Warlock, Monk, DeathKnight];

  const BloodElf = new PlayableRace("Blood Elf", "RACE_Blood-Elf-M.png", [...nearlyUniversalClasses, Paladin, DemonHunter], Faction.Horde, false, true, belfGray, belfGrayedOutSetter);
  const DarkIronDwarf = new PlayableRace("Dark Iron Dwarf", "RACE_Dark-Iron-Dwarf-M.png", [...nearlyUniversalClasses, Paladin, Shaman], Faction.Alliance, true, false, dIDwarfGray, dIDwarfGrayedOutSetter);
  const Dracthyr = new PlayableRace("Dracthyr", "RACE_Dracthyr-M.png", [Evoker], Faction.Both, false, true, dracGray, dracGrayedOutSetter);
  const Draenei = new PlayableRace("Draenei", "RACE_Draenei-M.png", [...nearlyUniversalClasses, Paladin, Shaman], Faction.Alliance, false, true, draeneiGray, draeneiGrayedOutSetter);
  const Dwarf = new PlayableRace("Dwarf", "RACE_Dwarf-M.png", [...nearlyUniversalClasses, Paladin, Shaman], Faction.Alliance, true, false, dwarfGray, dwarfGrayedOutSetter);
  const Gnome = new PlayableRace("Gnome", "RACE_Gnome-M.png", [...nearlyUniversalClasses], Faction.Alliance, false, false, gnomeGray, gnomeGrayedOutSetter);
  const Goblin = new PlayableRace("Goblin", "RACE_Goblin-M.png", [...nearlyUniversalClasses, Shaman], Faction.Horde, false, false, goblinGray, goblinGrayedOutSetter);
  const HighmountainTauren = new PlayableRace("Highmountain Tauren", "RACE_Highmountain-Tauren-M.png", [...nearlyUniversalClasses, Druid, Shaman], Faction.Horde, true, true, hmTaurenGray, hmTaurenGrayedOutSetter);
  const Human = new PlayableRace("Human", "RACE_Human-M.png", [...nearlyUniversalClasses, Paladin], Faction.Alliance, false, true, humanGray, humanGrayedOutSetter);
  const KulTiran = new PlayableRace("Kul Tiran Human", "RACE_Kul-Tiran-M.png", [...nearlyUniversalClasses, Druid, Shaman], Faction.Alliance, false, true, ktGray, ktGrayedOutSetter);
  const LightforgedDraenei = new PlayableRace("Lightforged Draenei", "RACE_Lightforged-Draenei-M.png", [...nearlyUniversalClasses, Paladin], Faction.Alliance, false, true, lfDraeneiGray, lfDraeneiGrayedOutSetter);
  const MagharOrc = new PlayableRace("Mag'har Orc", "RACE_Maghar-Orc-M.png", [...nearlyUniversalClasses, Shaman], Faction.Horde, false, true, magharGray, magharGrayedOutSetter);
  const Mechagnome = new PlayableRace("Mechagnome", "RACE_Mechagnome-M.png", [...nearlyUniversalClasses], Faction.Alliance, false, false, mechaGray, mechaGrayedOutSetter);
  const NightElf = new PlayableRace("Night Elf", "RACE_Night-Elf-M.png", [...nearlyUniversalClasses, Druid, DemonHunter], Faction.Alliance, false, true, nelfGray, nelfGrayedOutSetter);
  const Nightborne = new PlayableRace("Nightborne", "RACE_Nightborne-M.png", [...nearlyUniversalClasses], Faction.Horde, false, true, nightborneGray, nightborneGrayedOutSetter);
  const Orc = new PlayableRace("Orc", "RACE_Orc-M.png", [...nearlyUniversalClasses, Shaman], Faction.Horde, false, true, orcGray, orcGrayedOutSetter);
  const Pandaren = new PlayableRace("Pandaren", "RACE_Pandaren-M.png", [...nearlyUniversalClasses, Shaman], Faction.Both, true, true, pandaGray, pandaGrayedOutSetter);
  const Tauren = new PlayableRace("Tauren", "RACE_Tauren-M.png", [...nearlyUniversalClasses, Paladin, Shaman, Druid], Faction.Horde, true, true, taurenGray, taurenGrayedOutSetter);
  const Troll = new PlayableRace("Troll", "RACE_Troll-M.png", [...nearlyUniversalClasses, Druid, Shaman], Faction.Horde, false, true, trollGray, trollGrayedOutSetter);
  const Undead = new PlayableRace("Undead", "RACE_Undead-M.png", [...nearlyUniversalClasses], Faction.Horde, false, true, undeadGray, undeadGrayedOutSetter);
  const VoidElf = new PlayableRace("Void Elf", "RACE_Void-Elf-M.png", [...nearlyUniversalClasses], Faction.Alliance, false, true, velfGray, velfGrayedOutSetter);
  const Worgen = new PlayableRace("Worgen", "RACE_Worgen-M.png", [...nearlyUniversalClasses, Druid], Faction.Alliance, true, true, worgenGray, worgenGrayedOutSetter);
  const Vulpera = new PlayableRace("Vulpera", "RACE_Vulpera-M.png", [...nearlyUniversalClasses, Shaman], Faction.Horde, true, false, vulperaGray, vulperaGrayedOutSetter);
  const ZandalariTroll = new PlayableRace("Zandalari Troll", "RACE_Zandalari-Troll-M.png", [...nearlyUniversalClasses, Druid, Paladin, Shaman], Faction.Horde, false, true, zandiGray, zandiGrayedOutSetter);

  const allClasses = [Warrior, Hunter, Mage, Rogue, Priest, Warlock, Paladin, Druid, Shaman, Monk, DemonHunter, DeathKnight, Evoker];
  //Organize the Alliance and Horde here into the order they appear in character creation. Also want to make Panda/Dracthyr their own div.
  const allRaces = [Human, Dwarf, NightElf, Gnome, Draenei, Worgen, VoidElf, LightforgedDraenei, DarkIronDwarf, KulTiran, Mechagnome, Orc, Undead, Tauren, Troll, BloodElf, Goblin, Nightborne, HighmountainTauren, MagharOrc, ZandalariTroll, Vulpera, Pandaren, Dracthyr];

  const questionArray = [q1, q2, q3, q5, q6, q7];
  const [answerArray, setAnswerArray] = useState([q1Answer, q2Answer, q3Answer, q5Answer, q6Answer, q7Answer]);

  useEffect(() => {
    setAnswerArray([q1Answer, q2Answer, q3Answer, q5Answer, q6Answer, q7Answer])
  }, [q1Answer, q2Answer, q3Answer, q5Answer, q6Answer, q7Answer])

  return <>
    <h1>WoW</h1>
    <div id="mainContainer">
      <CRHighlightTable QuestionStateArray={answerArray} arrayOfClassObjects={allClasses} arrayOfRaceObjects={allRaces} />
      <Quiz questionArray={questionArray} classGrayedOutStates={allClasses} raceGrayedOutStates={allRaces} />
    </div>
  </>
}