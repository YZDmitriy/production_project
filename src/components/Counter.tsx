import  { useState } from 'react';
import cls from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cls.root}>
      Counter
      {count}
      <button onClick={() => setCount(count + 1)} className={cls.btn}>+</button>
      <button onClick={() => setCount(count - 1)} className={cls.btn}>-</button>
    </div>
  );
};
