import { useState } from "react";

const QuizBlock = ({ answersList }) => {
  let [currentQuestion, setCurrentQuestion] = useState(0);

  let [showScore, setShowScore] = useState(false);

  let [score, setScore] = useState(0)

  function currentQuestionHandler(isCorrect) {

    if(isCorrect===true) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion+1
    if (nextQuestion < answersList.length) {
      setCurrentQuestion(nextQuestion);
    } else {setShowScore(true)}
  }

  return (
    <div className="app">
      {showScore ?
      <div className="quiz-container">
        <div className="score">
          <h1>Вы набрали {score} очков из {answersList.length}</h1>
        </div>
      </div> 
      :
      <>
        <div className="quiz-container">
          <div className="question-block">
            <h1>
              Вопрос {currentQuestion + 1}/{answersList.length}
            </h1>
            <h2>{answersList[currentQuestion]?.questionText}</h2>
          </div>
          <div className="answer-block">
            {answersList[currentQuestion].answerOptions.map((elem, index) => {
              return (
                <div
                  className="answer-variant"
                  key={index}
                  onClick={()=>currentQuestionHandler(elem.isCorrect)}
                >
                  <h2>{elem.answerText}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </>}
      
    </div>
  );
};

export default QuizBlock;
