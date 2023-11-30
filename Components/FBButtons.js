export default function FBButtons({direction, onClick, activeState}){
    const fw = ">"
    const bw = "<"
    return <>
    {
        direction==="back" && activeState === true ?
        <button onClick={(e) => onClick(e)}>{bw}</button>
        : direction==="back" && activeState === false ?
        <button disabled className="disabled">{bw}</button>
        : direction==="forward" && activeState == true ?
        <button onClick={(e) => onClick(e)}>{fw}</button>
        : <button disabled className="disabled">{fw}</button>
    }
    </>
}