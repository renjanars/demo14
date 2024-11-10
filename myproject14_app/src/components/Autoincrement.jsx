import React, { useState } from 'react';
import '../styles/Auto.css';



function AutoIncrementCounter() {
  // Initialize state for count
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount} className="increment-button">
        Increment
      </button>
    </div>
  );
}

export default AutoIncrementCounter;