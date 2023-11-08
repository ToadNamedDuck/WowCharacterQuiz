import { useState } from "react";

export default function IndividualCR({ ClassOrRaceObject }) {
    const [isGrayedOut, setGrayedOut] = useState(false);

    return <>
        <div class="racesTableMember" style={{ width: "130px", height: "130px", display: "inline-block" }}>
            <img src={ClassOrRaceObject.icon} alt={ClassOrRaceObject.name} title={ClassOrRaceObject.name} />
        </div>
    </>

}