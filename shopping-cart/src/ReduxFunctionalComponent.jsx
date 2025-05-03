import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./actions/counterAction";

const Home = ({ setCount, count }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const useFetchye = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }, [url]);
    return { data, error, loading };
  };

  const [data, error, loading] = useFetchye("");
  return (
    <>
      <p>
        The time is <time>10:20pm</time>
      </p>
      <div>
        Address here is <address>3-b/3 sahara states</address>
      </div>
      <button onClick={() => dispatch(Increment())}>Click me {counter} </button>
    </>
  );
};

export default Home;
