import React from "react";

const Home = ({ setCount, count }) => {
  const handleCount = () => {
    console.log("going");
    setCount(count + 1);
  };
  return (
    <>
      <p>
        The time is <time>10:20pm</time>
      </p>
      <div>
        Address here is <address>3-b/3 sahara states</address>
      </div>
      <button onClick={handleCount}>Click me </button>
    </>
  );
};

export default Home;
