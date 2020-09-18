import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

function resetArray() {
  const array = Array.from({ length: 300 }, () => Math.floor(Math.random() * 1000));
  console.log(array);
  return array;
}

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => setArray(resetArray()), []);

  return (
    <div>
      <h1>
        Visualizer
      </h1>
      <div className="array-container">
        {
          array.map((value, idx) => (
            <div
              className="array-column"
              key={idx}
              style={{ height: `${value}px` }}
            />
          ))
        }
      </div>
    </div>
  );
}


export default SortingVisualizer;
