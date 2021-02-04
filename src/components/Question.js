import React, { useState, useEffect, useRef } from "react";

function Question({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector(
      "input:checked"
    );
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-5">{data.question}</h2>
        <div
          className="form-check d-flex flex-column justify-content-around"
          ref={radiosWrapper}
        >
          {data.choices.map((choice, i) => (
            <div key={i} style={{backgroundColor: "#f5f5f5"}} className="mb-2 p-3" >
              <input
                className="form-check-input"
                type="radio"
                name="answer"
                id={i}
                value={choice}
                onChange={changeHandler}
              />
              <label className="form-check-label"  for={i}>
                {choice}
              </label>
            </div>
          ))}
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button
          className="btn btn-lg btn-primary w-100 mt-4"
          onClick={nextClickHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
