import  { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
