import quizData from "./src/data/quiz.json"
const randomEl = () => {
    let shuffled = quizData.data.sort(function(){return .5 - Math.random()})
    let selectedArr = shuffled.slice(0,5)
    console.log(selectedArr);
  }
  randomEl()
