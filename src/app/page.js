import Quiz from "../../Components/Quiz";

export class Question{
  qText = "";
  qChoices = [];
  constructor(questionText, ...choices){
    this.qText = questionText;
    if(choices !== null || choices !== undefined){
      choices.forEach(choice => {
        this.qChoices.push(choice);
      });
    }
  }
}
export default function Home(){
  return <>
    <h1>WoW</h1>
    <p>Balls</p>
    <input type="text"/>
    <Quiz/>
  </>
}