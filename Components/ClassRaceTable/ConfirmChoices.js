export default function ConfirmChoices({classGrayedOutStates, raceGrayedOutStates}){
    function buttonOnClick(e){
        e.preventDefault();
        let validRaces = raceGrayedOutStates.filter(race => race.grayedOutState !== true);
        let validClasses = classGrayedOutStates.filter(classObj => classObj.grayedOutState !== true);
        console.log(validRaces)
        console.log(validClasses)
    }
    return <>
        <button onClick={(e) => buttonOnClick(e)}>Click Me</button>
    </>
}