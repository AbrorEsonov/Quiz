import React, { useState, useEffect } from "react";
import "./App.css";
import Start from "./components/Start";
import Question from "./components/Question";
import End from "./components/End";
import ModalPage from "./components/Modal";
import quizData from "./data/quiz.json";
let interval;
function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  const [selectedArr, setSelectedArr] = useState([])
  const [username, setUserName] = useState("")

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
   let shuffled = quizData.data.sort(function(){return .5 - Math.random()})
     setSelectedArr(shuffled.slice(0,5)) 
  }, [])
  // console.log(selectedArr);


  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const resetClickHandler = () => {
    setSelectedArr(quizData.data.sort(function(){return .5 - Math.random()}).slice(0,5));
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    setShowModal(false);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} username={username} setUserName={setUserName} />}
      {step === 2 && (
        <Question
          data={selectedArr[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={selectedArr.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
          
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={selectedArr}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(true)}
          time={time}
          username={username}
        />
      )}

      {showModal && (
        <ModalPage
          onClose={() => setShowModal(false)}
          results={answers}
          data={selectedArr}
        />
      )}
    </div>
  );
}

export default App;
