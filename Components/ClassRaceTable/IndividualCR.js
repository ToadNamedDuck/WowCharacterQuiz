import { Faction, LotsOfButtons, PlayableClass, PlayableRace, Position } from "@/app/page";
import { useEffect, useState } from "react";

export default function IndividualCR({ ClassOrRaceObject, questionStateArray }) {
    const [isGrayedOut, setGrayedOut] = useState(false);

    useEffect(() => {
        //Refresh state back to false
        setGrayedOut(false);
        //Compare each question state to the invalidation questions
        if (questionStateArray !== undefined && ClassOrRaceObject !== undefined) {
            if (ClassOrRaceObject instanceof PlayableClass) {//For Classes.
                //Classes only need to check Questions 2, 3, and 6
                switch (questionStateArray[1]) {
                    case 0: {
                        if (ClassOrRaceObject.position !== Position.Ranged && ClassOrRaceObject.position !== Position.Both) {
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 1: {
                        if (ClassOrRaceObject.position !== Position.Melee && ClassOrRaceObject.position !== Position.Both) {
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 2: {
                        if (ClassOrRaceObject.canHeal !== true) {
                            setGrayedOut(true)
                        }
                        break;
                    }
                    default:{
                        break;
                    }
                }
                switch (questionStateArray[2]){
                    case 0: {
                        if(ClassOrRaceObject.isComplex !== LotsOfButtons.Yes && ClassOrRaceObject.isComplex !== LotsOfButtons.SpecDependent){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 1:{
                        if(ClassOrRaceObject.isComplex !== LotsOfButtons.No && ClassOrRaceObject.isComplex !== LotsOfButtons.SpecDependent){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    default:{
                        break;
                    }
                }
                switch (questionStateArray[5]){
                    case 0: {
                        if(ClassOrRaceObject.isFlexible !== true){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 1: {
                        if(ClassOrRaceObject.isFlexible !== false){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
            if (ClassOrRaceObject instanceof PlayableRace) {
                //Classes need to respond to Questions: 1, 4, 5 
                switch(questionStateArray[0]){
                    case 0:{
                        if(ClassOrRaceObject.faction !== Faction.Alliance && ClassOrRaceObject.faction !== Faction.Both){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 1:{
                        if(ClassOrRaceObject.faction !== Faction.Horde && ClassOrRaceObject.faction !== Faction.Both){
                            setGrayedOut(true)
                        }
                        break;
                    }
                    default:{
                        break;
                    }
                }
                switch(questionStateArray[3]){
                    case 0:{
                        if(ClassOrRaceObject.isHairy === false){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 1:{
                        if(ClassOrRaceObject.isHairy === true){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    default:{
                        break;
                    }
                }
                switch(questionStateArray[4]){
                    case 0: {
                        if(ClassOrRaceObject.isTall === false){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    case 1:{
                        if(ClassOrRaceObject.isTall === true){
                            setGrayedOut(true);
                        }
                        break;
                    }
                    default:{
                        break;
                    }
                }
            }
        }
    }, [questionStateArray])

    return <>
        {
            !isGrayedOut
                ?
                <div className="racesTableMember">
                    <img className="CR-Icon" src={ClassOrRaceObject.icon} alt={ClassOrRaceObject.name} title={ClassOrRaceObject.name} />
                </div>
                :
                <div className="racesTableMemberGrayed">
                    <img className="CR-Icon" src={ClassOrRaceObject.icon} alt={ClassOrRaceObject.name} title={ClassOrRaceObject.name} />
                </div>
        }
    </>

}