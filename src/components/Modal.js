import React from 'react';
const ModalPage = ({ onClose, results, data }) => {
 
  return(
<div className="d-block">
<ul>
  {results.map((result, i) => (
    <li key={i} className="mb-6">
      <p><strong>{result.q}</strong></p>
      <p className={result.a === data[i].answer ? 'bg-success text-white p-2' : 'bg-danger text-white p-2'}>Your answer: {result.a}</p>
      {result.a !== data[i].answer && <p className="bg-primary text-white p-2">Correct answer: {data[i].answer}</p>}
    </li>
  ))}
</ul>
<button className="btn btn-secondary w-75 ml-5 text-center mb-3" onClick={onClose}>Close</button>
</div>
  );
}

export default ModalPage;