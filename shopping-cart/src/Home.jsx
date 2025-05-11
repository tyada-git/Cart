import React, { useEffect, useId, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./actions/counterAction";
import { useState } from "react";
import Counter from "./Counter";

const Home = () => {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state?.counter);
  // console.log(counter);
  // const passwordHintId = useId();
  // console.log("id", passwordHintId);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    // console.log("going");
    setCount(count + 1);
  };
  const myref = useRef(null);
  useEffect(() => {
    console.log(myref);
    myref.current.focus();
    myref.current.value = "dummy name";
  }, []);
  return (
    <>
      <Counter />
      <p>
        The time is <time>10:20pm</time>
      </p>
      <input type="text" placeholder="my name here" ref={myref} />
      <div>
        {/* {counter} */}
        Address here is <address>3-b/3 sahara states</address>
      </div>
      <button onClick={handleCount} role="button">
        Click me {count}
      </button>
    </>
  );
};

export default Home;
