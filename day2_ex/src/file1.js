import React, { useState,useEffect } from 'react';

function Count(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.initValue);
  const [step]=useState(props.step);
  useEffect(() => {
    
    localStorage.setItem("count", count);
  },[count]);
  
  return (
    <div>
      <p>Number {count} times</p>
      <button onClick={() => setCount(count-0+(step-0))}>
        Add
      </button>
      <button onClick={() => setCount(count - step)}>
        Subtract
      </button>
    </div>
  );
}
export default Count;
