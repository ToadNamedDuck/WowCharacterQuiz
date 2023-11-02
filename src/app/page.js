export class Question{
  qText = "";
  qChoices = [];
  constructor(questionText, [choices]){
    this.qText = questionText;
    choices.forEach(choice => {
      this.qChoices.push(choice);
    });
  }
}
export default function Home(){
  return <>
    <h1>WoW</h1>
    <p>Balls</p>
    <input type="text"/>
  </>
}