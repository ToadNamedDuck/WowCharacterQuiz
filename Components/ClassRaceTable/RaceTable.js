//Races need info for alliance or horde, as well as other values which come from the particular questions - these values can all be boolean.

import { Faction } from "@/app/page"

//Also they need their icon. We really only need to use the male race icons, no need to convolute the site with 2 images for every race.
export default function RaceTable({arrayOfRaceObjects, questionStateArray}){
    //A validation function should select relevent answer choices the user has selected, and return true or false in each sub piece here
    //For example, if a question asks "Do you care if your race is extremely hairy?" and they select no, dwarves, worgen, vulpera should all
    //gray out.

    //Each class/race state might be easier to have live at a higher level
    //That way we can have valid options be highlighted, and maintain an array of the valid options elsewhere
    //And pass that valid options table to the "Tell me what to Play" button we will make, which will display a result field.

    return <div id="raceTable">
        <div id="HordeRaces">
            {
                arrayOfRaceObjects.map(race => {
                    if(race.faction === Faction.Horde || race.faction === Faction.Both)
                    return <div style={{width:"130px", height: "130px", display:"inline-block"}}><img src={race.raceIconLocation} alt={race.name} title={race.name}/></div>
                })
            }
        </div>
        <div id="AllianceRaces">
        {
                arrayOfRaceObjects.map(race => {
                    if(race.faction === Faction.Alliance || race.faction === Faction.Both)
                    return <div style={{width:"130px", height: "130px", display:"inline-block"}}><img src={race.raceIconLocation} alt={race.name} title={race.name}/></div>
                })
            }
        </div>
    </div>
}