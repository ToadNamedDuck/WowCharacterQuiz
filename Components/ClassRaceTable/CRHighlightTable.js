import ClassTable from "./ClassTable";
import RaceTable from "./RaceTable";

//We need the state values of the questions, the array of class objects, and the array of race objects.
export default function CRHighlightTable({ QuestionStateArray, arrayOfClassObjects, arrayOfRaceObjects }) {
    return <div id="unifiedTable">
        <ClassTable arrayOfClassObjects={arrayOfClassObjects} questionStateArray={QuestionStateArray} />
        <RaceTable arrayOfRaceObjects={arrayOfRaceObjects} questionStateArray={QuestionStateArray} />
    </div>
}