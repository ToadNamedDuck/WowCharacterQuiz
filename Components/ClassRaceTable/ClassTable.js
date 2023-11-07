//Classes aren't limited to only Alliance or Horde, so all of their appropiate values come from the questions.
//They will need their icon in the object.
export default function ClassTable({arrayOfClassObjects, QuestionStateArray}){
    //A validation function for objects in this table should compare values of the state passed in to the user's selected answers.
    //So if user selects melee, then all of the ranged classes should use the function and return false.

    return <div id="classTable">
        <div id="HordeRaces">
            {
                arrayOfClassObjects.map(pClass => {
                    return <img src={pClass.classIcon} alt={pClass.name} title={pClass.name}/>
                })
            }
        </div>
    </div>
}