import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card">
      <div className="card-body">
          <h3 className="card-title">Your results</h3>
          <p className="card-text">{correctAnswers} of {data.length}</p>
          <p className="card-text"><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p className="card-text"><strong>Your time:</strong> {formatTime(time)}</p>
          <button className="btn btn-primary w-50 mr-2" onClick={onAnswersCheck}>Check your answers</button>
          <button className="btn btn-success w-25" onClick={onReset}>Try again</button>
      </div>
    </div>
  );
}

export default End;