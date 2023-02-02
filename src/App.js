// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import QuizStart from "./components/QuizStart";
import Container from "./components/Container";
import Quiz from "./components/Quiz";
import { useState } from "react";
import Result from "./components/Result";
let questions =[
  {
    question: 'Which movie do you like most?',
    options:['KGF','RRR','VALTERU VERAYYA'],
    ans :1
  },
  {
    question: 'What is your favourite dish?',
    options:['JUNNU','ICE CREAM','PANIPURI'],
    ans :2
  },
  {
    question: 'What is your favourite cartoon',
    options:['ROLLNO 21','OGGY COCKROACHES','HEIDI'],
    ans :3
  }

]
function App() {
  let [isStarted, setIsStarted]= useState(false)
  let [currentQuiz,setCurrentQuiz]=useState(0)
   
  function changeQuiz(){
    setCurrentQuiz(currentQuiz+1);
  }
    return(
    <>
     <Header />
     <Container>
    {isStarted ?(
    currentQuiz < questions.length? (
    <Quiz changeQuiz={changeQuiz} q={questions[currentQuiz]}/> 
    ):( 
      <Result/>
    )
    ):(
    <QuizStart setIsStarted={setIsStarted}/>
    )}
    </Container>

    </>
  );
}
export default App;
  