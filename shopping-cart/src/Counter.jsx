import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  const handleClicks = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return <button onClick={handleClicks}>New Component{count}</button>;
}
export default Counter;
