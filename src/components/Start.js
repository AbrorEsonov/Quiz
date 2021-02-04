import React from "react";
import "../App.css";
function Start({ onQuizStart, username, setUserName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card ">
      <div className="card-body">
        <form>
          <input
            type="text"
            name="name"
            value={username}
            required="required"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary ml-2"
          />
        </form>
        {username !== "" ? (
          <div>
            <h1 className="card-title">Start the quiz</h1>
            <p className="card-text">Good luck!</p>
            <button className="btn btn-primary btn-lg" onClick={onQuizStart}>
              Start
            </button>
          </div>
        ) : (
          <p style={{ color: "red" }}>Please enter your name</p>
        )}
      </div>
    </div>
  );
}

export default Start;
