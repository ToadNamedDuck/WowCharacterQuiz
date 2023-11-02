import Quiz from "../../Components/Quiz";

export class Question{
  qId;
  qText = "";
  qChoices = [];
  constructor(qID, questionText, choices){
    this.qId = qID;
    this.qText = questionText;
    if(choices !== null || choices !== undefined){
      choices.map(choice => {
        this.qChoices.push(choice);
      });
    }
  }
}
export default function Home(){
  return <>
    <h1>WoW</h1>
    <Quiz/>
  </>
}