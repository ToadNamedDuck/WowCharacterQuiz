import { useEffect, useState } from "react";

export default function IndividualCR({ ClassOrRaceObject }) {
    const [isGrayedOut, setGrayedOut] = useState(false);

    useEffect(() => {

    }, [isGrayedOut])

    return <>
    {
        !isGrayedOut
        ?
        <div className="racesTableMember">
            <img src={ClassOrRaceObject.icon} alt={ClassOrRaceObject.name} title={ClassOrRaceObject.name} />
        </div>
        :
        <div className="racesTableMemberGrayed">
            <img src={ClassOrRaceObject.icon} alt={ClassOrRaceObject.name} title={ClassOrRaceObject.name} />
        </div>
    }
    </>

}