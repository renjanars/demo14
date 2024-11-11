import React, { useState } from 'react';
import '../styles/Auto.css';
function AutoIncrementCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount} className="increment-button">
        Increment
      </button>
    </div>
  );
}

export default AutoIncrementCounter;
