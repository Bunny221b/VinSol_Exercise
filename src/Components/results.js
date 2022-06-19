import React from "react";
import "./results.css";

function Results({ data, activateReset, score }) {
  return (
    <div className="questions">
      <div className="score__div">
        <h2>Your Score : {score}</h2>
      </div>
      {data.map((item, index) => {
        return (
          <div
            style={{
              backgroundColor:
                parseFloat(item.userAnswer).toFixed(1) == item.correctAnswer ? "#83BD75" : "#F24C4C",
            }}
            className="questions__tab"
          >
            <h2>{item.question}</h2>
            <h2>User Answer : {item.userAnswer}</h2>
            <h2>Correct Answer : {item.correctAnswer}</h2>
          </div>
        );
      })}
      <div className="startAgain__div">
        <button className="startAgain__icon" onClick={activateReset}>
          Start Again
        </button>
      </div>
    </div>
  );
}

export default Results;
