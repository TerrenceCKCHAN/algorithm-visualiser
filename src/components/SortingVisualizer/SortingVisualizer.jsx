import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import mergeSort from '../sortingAlgorithms/mergeSort';

const ANIMATION_SPEED = 1;
const PRIMARY_COLOR = 'blue';
const SECONDARY_COLOR = 'red';

function resetArray() {
  const array = Array.from({ length: 200 }, () => Math.floor(Math.random() * 500));
  console.log(array);
  return array;
}

function animate(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayColumns = document.getElementsByClassName('array-columns');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [colOneIdx, colTwoIdx] = animations[i];
      console.log(colOneIdx);
      console.log(colTwoIdx);
      console.log("BREAK");
      const colOneStyle = arrayColumns[colOneIdx].style;
      const colTwoStyle = arrayColumns[colTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        colOneStyle.backgroundColor = color;
        colTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [colOneIdx, newHeight] = animations[i];
        const colOneStyle = arrayColumns[colOneIdx].style;
        colOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED)
    }
  }
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
              className="array-columns"
              key={idx}
              style={{ height: `${value}px` }}
            />
          ))
        }
        <br/>
        <button onClick={() => (setArray(resetArray()))}
        >
          New Array
        </button>
        <button onClick={() =>animate(mergeSort(array))}
        >
          Merge Sort
        </button>
      </div>

    </div>
  );
}


export default SortingVisualizer;
