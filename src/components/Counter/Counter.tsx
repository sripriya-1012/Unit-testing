import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter | Testing click | state update with condition</h2>
      <p>{count}</p>
      <button onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;