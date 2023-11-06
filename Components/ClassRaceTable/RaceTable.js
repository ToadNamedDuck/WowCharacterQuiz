//Races need info for alliance or horde, as well as other values which come from the particular questions - these values can all be boolean.
//Also they need their icon. We really only need to use the male race icons, no need to convolute the site with 2 images for every race.
export default function RaceTable({arrayOfRaceObjects, questionStateArray}){
    //A validation function should select relevent answer choices the user has selected, and return true or false in each sub piece here
    //For example, if a question asks "Do you care if your race is extremely hairy?" and they select no, dwarves, worgen, vulpera should all
    //gray out.

    return <div id="raceTable">
        Filler Data for Race table
    </div>
}