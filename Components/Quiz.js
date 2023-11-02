import { Question } from "@/app/page";
export default function Quiz(){
    const q1 = new Question("Hello", ["yes", "no", "goodbye"]);
    console.log(q1);
    return <h1>Hi from Quiz component.</h1>
}