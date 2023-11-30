export default function FBButtons({direction, onClick, activeState}){
    const fw = ">"
    const bw = "<"
    return <>
    {
        direction==="back" && activeState === true ?
        <button className="usageButtons" onClick={(e) => onClick(e)}>{bw}</button>
        : direction==="back" && activeState === false ?
        <button className="usageButtons" disabled>{bw}</button>
        : direction==="forward" && activeState == true ?
        <button className="usageButtons" onClick={(e) => onClick(e)}>{fw}</button>
        : <button className="usageButtons" disabled >{fw}</button>
    }
    </>
}