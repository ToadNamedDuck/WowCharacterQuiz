import IndividualCR from "./IndividualCR"

export default function ClassTable({arrayOfClassObjects, questionStateArray}){
    return <div id="classTable">
        <div id="HordeRaces">
            {
                arrayOfClassObjects.map(pClass => {
                    return <IndividualCR key={`Class-${pClass.name}`} questionStateArray={questionStateArray} ClassOrRaceObject={pClass}/>
                })
            }
        </div>
    </div>
}