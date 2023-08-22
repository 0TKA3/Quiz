import { useState } from "react";
import "./assets/style.scss";
import QuizBlock from "./assets/components/QuizBlock";


function App() {


  let [answersList, setAnswersList] = useState([{
    questionText: 'Какой город является столицей франции?',
    answerOptions: [
        {answerText: 'Нью Йорк', isCorrect: false},
        {answerText: 'Лондон', isCorrect: false},
        {answerText: 'Париж', isCorrect: true},
        {answerText: 'Москва', isCorrect: false},
    ]
},
{
  questionText: 'Кто является генеральным деректором Tesla?',
  answerOptions: [
      {answerText: 'Илон Маск', isCorrect: true},
      {answerText: 'Марк Цукерберг', isCorrect: false},
      {answerText: 'Джефф Безос', isCorrect: false},
      {answerText: 'Павел Дуров', isCorrect: false},
  ]
},
{
  questionText: 'Какая компания изобрела iPhone?',
  answerOptions: [
      {answerText: 'Samsung', isCorrect: false},
      {answerText: 'Apple', isCorrect: true},
      {answerText: 'Panasonic', isCorrect: false},
      {answerText: 'Xiaomi', isCorrect: false},
  ]
},
{
  questionText: 'Какая марка машины родом из США?',
  answerOptions: [
      {answerText: 'Porsche', isCorrect: false},
      {answerText: 'Lexus', isCorrect: false},
      {answerText: 'BMW', isCorrect: false},
      {answerText: 'Ford', isCorrect: true},
  ]
},])


  return (
    <>
      <QuizBlock answersList={answersList}></QuizBlock>
    </>
  );
}

export default App;
