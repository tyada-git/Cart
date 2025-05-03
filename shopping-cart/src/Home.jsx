import React, { useEffect, useId, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./actions/counterAction";

const Home = ({ setCount, count }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  console.log(counter);
  const passwordHintId = useId();
  console.log("id", passwordHintId);
  // const handleCount = () => {
  //   console.log("going");
  //   setCount(count + 1);
  // };
  const myref = useRef(null);
  useEffect(() => {
    console.log(myref);
    myref.current.focus();
    myref.current.value = "dummy name";
  }, []);
  return (
    <>
      <p>
        The time is <time>10:20pm</time>
      </p>
      <input type="text" placeholder="my name here" ref={myref} />
      <div>
        {counter}
        Address here is <address>3-b/3 sahara states</address>
      </div>
      <button onClick={() => dispatch(Increment())}>Click me </button>
    </>
  );
};

export default Home;
