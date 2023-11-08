import { Faction } from "@/app/page"
import IndividualCR from "./IndividualCR"

export default function RaceTable({arrayOfRaceObjects, questionStateArray}){
    return <div id="raceTable">
        <div id="AllianceRaces">
        {
                arrayOfRaceObjects.map(race => {
                    if(race.faction === Faction.Alliance)
                    return <IndividualCR ClassOrRaceObject={race}/>
                })
            }
        </div>
        <div id="HordeRaces">
            {
                arrayOfRaceObjects.map(race => {
                    if(race.faction === Faction.Horde)
                    return <IndividualCR ClassOrRaceObject={race}/>
                })
            }
        </div>
        <div id="NeutralRaces">
            {
                arrayOfRaceObjects.map(race => {
                    if(race.faction === Faction.Both)
                    return <IndividualCR ClassOrRaceObject={race}/>                })
            }
        </div>
    </div>
}