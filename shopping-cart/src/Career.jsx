import React, { useEffect, useReducer, useRef, useState } from "react";
const initialState = {
  name: "",
  city: "",
  num: 0,
};
const formReducer = (formContent = initialState, action) => {
  switch (action.type) {
    case "setName":
      return { ...formContent, name: action.payload };
    case "setCity":
      return { ...formContent, city: action.payload };
    case "setNumber":
      return { ...formContent, num: action.payload };
    default:
      return state;
  }
};

const Career = () => {
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [num, setNumber] = useState(0);
  const [formContent, dispatch] = useReducer(formReducer, initialState);
  const focusRef = useRef(null);
  useEffect(() => {
    // setName("");
    // setCity("");
    focusRef.current.focus();
  }, []);
  const onSubmitForm = () => {
    const prepData = { formContent };
    localStorage.setItem("firstName", formContent.name);
    console.log("prepData", prepData);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          console.log(e);
          console.log(e.target);
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <h2>Fill Your Details</h2>
        <div>
          <label htmlFor="name"> Your Name </label>
          <input
            type="text"
            ref={focusRef}
            placeholder="enter your name here"
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) =>
              dispatch({ type: "setName", payload: e.target.value })
            }
            id="name"
          ></input>
        </div>
        <div>
          <label> Your City </label>
          <select
            id="city"
            // onChange={(e) => setCity(e.target.value)}
            onChange={(e) =>
              dispatch({ type: "setCity", payload: e.target.value })
            }
          >
            <option>Select City</option>
            <option value="Pune">Pune</option>
            <option>Mumbai</option>
            <option>Bhopal</option>
          </select>
        </div>
        <div>
          <label>Phone Number </label>
          <input
            placeholder="enter your number here"
            // onChange={(e) => setNumber(e.target.value)}
            onChange={(e) =>
              dispatch({ type: "setNumber", payload: e.target.value })
            }
            type="number"
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Career;
