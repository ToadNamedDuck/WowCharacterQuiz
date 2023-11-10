import { useEffect, useState } from "react";

export default function IndividualCR({ ClassOrRaceObject, questionStateArray }) {
    const [isGrayedOut, setGrayedOut] = useState(false);

    useEffect(() => {
        //Refresh state back to false
        setGrayedOut(false);
        //Compare each question state to the invalidation questions
        ClassOrRaceObject.invalidationAnswers.forEach((answer, index) => {
            if(questionStateArray[index] === answer){
                setGrayedOut(true);
            }
        })
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