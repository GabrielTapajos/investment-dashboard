import React from 'react';

function Recommendations({ recommendations }) {
  return (
    <div className="Recommendations">
      <h2>Investment Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;