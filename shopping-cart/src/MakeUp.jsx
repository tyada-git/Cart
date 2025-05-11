import React, { useEffect, useState } from "react";

const MakeUp = () => {
  // const useToggle = () => {
  //   const [show, setShow] = useState(false);
  //   function toggle() {
  //     if (show) setShow(false);
  //     else setShow(true);
  //   }
  //   return [show, toggle];
  // };
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://uiuyiy.typicode.com/tods/1");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log("e", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return <>Make up component{data.title}</>;
};

export default MakeUp;
