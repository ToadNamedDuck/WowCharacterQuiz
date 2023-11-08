import IndividualCR from "./IndividualCR"

export default function ClassTable({arrayOfClassObjects, QuestionStateArray}){
    return <div id="classTable">
        <div id="HordeRaces">
            {
                arrayOfClassObjects.map(pClass => {
                    return <IndividualCR key={`Class-${pClass.name}`} ClassOrRaceObject={pClass}/>
                })
            }
        </div>
    </div>
}