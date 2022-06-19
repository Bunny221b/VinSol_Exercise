import React, { useState, useEffect } from "react";
import "./questionPage.css";
import Results from "./results";

function QuestionPage({ setScore, score, param, setExercise }) {
  // ---State Variables--- //

  const [rand1, setRand1] = useState();
  const [rand2, setRand2] = useState();
  const [randOp, setRandOp] = useState();
  const [questions, setQuestions] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [timer, setTimer] = useState(20);
  const [userAnswer, setUserAnswer] = useState();
  const [noOfQues, setNoOfQues] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const Question = `Question : What is the result of ${rand1} ${randOp} ${rand2} ?`;

  // ---Functions--- //

  useEffect(() => {
    randomGenerator();
  }, []);

  useEffect(() => {
    callTimer();
    if (noOfQues >= param.noOfQues) {
      setIsEnd(true);
    }
  }, [timer]);

  function callTimer() {
    const timerOne = setTimeout(() => {
      console.log("This will run after 1 second!");
      setTimer(timer - 1);
      if (timer === 0 && !isEnd) {
        handleNext();
        setTimer(20);
      }
    }, 1000);
  }

  function activateReset() {
    setScore(0);
    setExercise(0);
  }

  function randomGenerator() {
    let diff = param.max - param.min;
    setRand1(Math.floor(Math.random() * diff) + param.min);
    setRand2(Math.floor(Math.random() * diff) + param.min);
    setRandOp(
      param.operator.split(",")[
        Math.floor(Math.random() * param.operator.split(",").length)
      ]
    );
  }

  function calculator(num1, num2, op) {
    if (op === "+") {
      return num1 + num2;
    } else if (op === "-") {
      return num1 - num2;
    } else if (op === "*") {
      return num1 * num2;
    } else if (op === "/") {
      return num1 / num2;
    }
  }

  function evaluate(object) {
    if (parseFloat(object.userAnswer).toFixed(1) == object.correctAnswer) {
      setScore(score + 1);
    }
  }

  function handleNext() {
    const correctAnswer = calculator(rand1, rand2, randOp);
    const obj = {
      question: Question,
      userAnswer: userAnswer,
      correctAnswer: randOp === "/" ? correctAnswer.toFixed(1) : correctAnswer,
    };
    evaluate(obj);

    // also another way to push values into state variable
    // setQuestions((prevValue) => [...prevValue, obj]);

    questions.push(obj);
    setNoOfQues(noOfQues + 1);
    randomGenerator();
    setInputValue("");
  }

  // ---Components--- //

  return (
    <div>
      {/* Timer */}

      <div>
        {!isEnd ? (
          <div className="timer">
            <h2>00:00:{timer}</h2>
          </div>
        ) : null}
      </div>

      {/* Questions Component */}

      {noOfQues < param.noOfQues ? (
        <div>
          <div className="questionPage__div">
            <div className="questionPage">
              <h2 className="questionPage__ques">{Question}</h2>
            </div>

            <div className="questionPage__ques">
              <input
                className="questionPage__input"
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  setInputValue(e.target.value);
                }}
                type="text"
                placeholder="Type your answer here..."
                value={inputValue}
              />
            </div>
          </div>
          <button className="questionPage__btn" onClick={handleNext}>
            Next
          </button>
          <div className="questionPage__score">
            <h2>Score : {score}</h2>
            <div className="reset__div">
              <button className="reset__btn" onClick={activateReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Results data={questions} activateReset={activateReset} score={score} />
      )}
    </div>
  );
}

export default QuestionPage;
