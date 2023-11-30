export default function ConfirmChoices({ classGrayedOutStates, raceGrayedOutStates, showSelf, setResult ,setShowResult }) {
    function buttonOnClick(e) {
        e.preventDefault();
        let validRaces = raceGrayedOutStates.filter(race => race.grayedOutState !== true);
        let validClasses = classGrayedOutStates.filter(classObj => classObj.grayedOutState !== true);
        let selectedClass;
        let narrowedRaces;
        let ValidOptionChosen = false;
        while (ValidOptionChosen === false) {
            selectedClass = validClasses[Math.floor(Math.random() * validClasses.length)]
            narrowedRaces = validRaces.filter(race => race.validClasses.includes(selectedClass));
            if (narrowedRaces.length !== 0) {
                ValidOptionChosen = true;
            }
        }
        const selectedRace = narrowedRaces[Math.floor(Math.random() * narrowedRaces.length)]
        const result = [selectedClass, selectedRace];
        setResult(result)
        setShowResult(true)
    }
    return <>
        {
            showSelf ?
                <button className="calculate" onClick={(e) => buttonOnClick(e)}>Tell Me What To Play!!!</button>
                :
                <button className="hidden">Tell Me What To Play!!!</button>
        }
    </>
}