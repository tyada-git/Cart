import React, { useEffect, useState } from "react";
import CallChildMemo from "./CallChildMemo";
import ChildUseReducer from "./ChildUseReducer";
const NewReviseComponent = () => {
  const [count, setCount] = useState(0);
  const [datap, setDatap] = useState([]);
  const [name, setName] = useState("");
  console.log(" i am new revise");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setDatap(data.products));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      console.log("Cleanup: Clearing interval");
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleCount);

    return () => {
      document.removeEventListener("click", handleCount);
    };
  }, []);

  const handleCount = () => {
    console.log(" -----i a created");
    setCount(count + 1);
  };

  return (
    <>
      <CallChildMemo setName={setName} />
      <ChildUseReducer />
      New Revise Component
      {datap?.map((product) => (
        <>
          <p key={product.id}>{product.title}</p>
          {/* <p key={product.title}>{product.category}</p> */}
        </>
      ))}
      <button onClick={handleCount}>New-btn</button>
      Name set in child- {name}
      <div></div>
    </>
  );
};

export default NewReviseComponent;
