import React, { useState } from "react";
import "./main.css";
import QuestionPage from "./questionPage";

function Main() {
  // ---State Variables--- //

  const [exerciseOne, setExerciseOne] = useState(0);
  const [exerciseTwo, setExerciseTwo] = useState(0);

  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);

  const [paramOne, setParamOne] = useState({
    noOfQues: 20,
    min: 1,
    max: 10,
    operator: "+,-,*,/",
  });
  const [paramTwo, setParamTwo] = useState({
    noOfQues: 20,
    min: 1,
    max: 10,
    operator: "+,-,*,/",
  });

  // ---Functions--- //

  function handleStartOne(e) {
    e.preventDefault();
    setExerciseOne(1);
  }
  function handleStartTwo(e) {
    e.preventDefault();
    setExerciseTwo(1);
  }

  // ---Components--- //

  return (
    <div className="main">
      {/* First Quiz Component */}

      <div className="mainDiv">
        <h1 className="main__heading">Exercise One</h1>

        {exerciseOne === 0 ? (
          <div>
            <div className="main__form">
              <form>
                {/* First Input Field */}

                <div className="main__row">
                  <label className="main__label">Number of Questions : </label>
                  <input
                    className="main__input"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setParamOne({
                        ...paramOne,
                        noOfQues: value,
                      });
                    }}
                    type="number"
                    placeholder="No. of Ques..."
                  />
                </div>
                {/* Second Input Field */}

                <div className="main__row">
                  <label className="main__label">Range of Numbers : </label>
                  <input
                    className="main__inputM"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setParamOne({
                        ...paramOne,
                        min: value,
                      });
                    }}
                    type="number"
                    placeholder="Min"
                  />
                  <input
                    className="main__inputM"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setParamOne({
                        ...paramOne,
                        max: value,
                      });
                    }}
                    type="number"
                    placeholder="Max"
                  />
                </div>
                {/* Third Input Field */}

                <div className="main__row">
                  <label className="main__label">
                    Operators ( + , - , * , / ) :{" "}
                  </label>
                  <input
                    className="main__input"
                    onChange={(e) => {
                      if (e.target.value) {
                        setParamOne({
                          ...paramOne,
                          operator: e.target.value,
                        });
                      }
                    }}
                    type="text"
                    placeholder="+, -, *,  /"
                  />
                </div>
              </form>
            </div>

            {/* Start Button */}

            <button onClick={handleStartOne} className="main__btn">
              Start Quiz
            </button>
          </div>
        ) : (
          <QuestionPage
            setScore={setScoreOne}
            score={scoreOne}
            param={paramOne}
            setExercise={setExerciseOne}
          />
        )}
      </div>

      {/* Total Score Component */}

      <div>
        <h1>Total Score : {scoreOne + scoreTwo}</h1>
      </div>

      {/* Second Quiz Component */}

      <div className="mainDiv">
        <h1 className="main__heading">Exercise Two</h1>
        {exerciseTwo === 0 ? (
          <div>
            <div className="main__form">
              <form>
                {/* First Input Field */}

                <div className="main__row">
                  <label className="main__label">Number of Questions : </label>
                  <input
                    className="main__input"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setParamTwo({
                        ...paramTwo,
                        noOfQues: value,
                      });
                    }}
                    type="number"
                    placeholder="No. of Ques..."
                  />
                </div>
                {/* Second Input Field */}

                <div className="main__row">
                  <label className="main__label">Range of Numbers : </label>
                  <input
                    className="main__inputM"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setParamTwo({
                        ...paramTwo,
                        min: value,
                      });
                    }}
                    type="number"
                    placeholder="Min"
                  />
                  <input
                    className="main__inputM"
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setParamTwo({
                        ...paramTwo,
                        max: value,
                      });
                    }}
                    type="number"
                    placeholder="Max"
                  />
                </div>
                {/* Third Input Field */}

                <div className="main__row">
                  <label className="main__label">
                    Operators ( + , - , * , / ) :{" "}
                  </label>
                  <input
                    className="main__input"
                    onChange={(e) => {
                      if (e.target.value) {
                        setParamTwo({
                          ...paramTwo,
                          operator: e.target.value,
                        });
                      }
                    }}
                    type="text"
                    placeholder="+, -, *,  /"
                  />
                </div>
              </form>
            </div>
            {/* Start Button */}

            <button onClick={handleStartTwo} className="main__btn">
              Start Quiz
            </button>
          </div>
        ) : (
          <QuestionPage
            setScore={setScoreTwo}
            score={scoreTwo}
            param={paramTwo}
            setExercise={setExerciseTwo}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
