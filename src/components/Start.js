import React from "react";
import "../App.css"
function Start({ onQuizStart }) {
  return (
    <div className="card ">
      <div className="card-body">
          <h1 className="card-title">Start the quiz</h1>
          <p className="card-text">Good luck!</p>
          <button className="btn btn-primary btn-lg" onClick={onQuizStart}>
             Start
          </button>
      </div>
    </div>
  );
}

export default Start;
