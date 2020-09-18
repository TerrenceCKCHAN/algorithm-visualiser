import React, { useState, useEffect } from 'react';

function SortingVisualizer() {
    const[array, setArray] = useState([]);

    useEffect(() => setArray(resetArray()), []);

    return (
        <>
            <h1>
                Visualizer
            </h1>
            { 
                array.map((value, idx) => {
                    return (
                    <div className="array-columns" key={idx}>
                        {value}
                    </div>
                    )
                })
            }  
        </>
    );
}

function resetArray() {
    const array = Array.from({length: 40}, () => Math.floor(Math.random() * 1000));
    console.log(array);
    return array;
}

export default SortingVisualizer;