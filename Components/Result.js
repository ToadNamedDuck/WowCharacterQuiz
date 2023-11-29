import { Faction } from "@/app/page";

export default function Result({ result, hidden }) {

    return <>
        {
            result[0] !== null && !hidden?
            <div id="result">
                <img className="CR-Icon" src={result[1].icon} alt={result[1].name} title={result[1].name} />
                {
                    result[1].faction === Faction.Alliance ?
                        <h4 className="allianceText">{`You should play a ${result[1].name} ${result[0].name}!`}</h4>
                        : result[1].faction === Faction.Horde ?
                            <h4 className="hordeText">{`You should play a ${result[1].name} ${result[0].name}!`}</h4>
                            :
                            <h4 className="neutralText">{`You should play a ${result[1].name} ${result[0].name}!`}</h4>
                }
                <img className="CR-Icon" src={result[0].icon} alt={result[0].name} title={result[0].name} />
            </div>
            :
            <div className="hidden" id="result">
            <img className="CR-Icon" src={result[1].icon} alt={result[1].name} title={result[1].name} />
            {
                result[1].faction === Faction.Alliance ?
                    <h4 className="allianceText">{`You should play a ${result[1].name} ${result[0].name}!`}</h4>
                    : result[1].faction === Faction.Horde ?
                        <h4 className="hordeText">{`You should play a ${result[1].name} ${result[0].name}!`}</h4>
                        :
                        <h4 className="neutralText">{`You should play a ${result[1].name} ${result[0].name}!`}</h4>
            }
            <img className="CR-Icon" src={result[0].icon} alt={result[0].name} title={result[0].name} />
        </div>
        }
    </>
}