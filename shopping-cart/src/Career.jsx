import React, { useEffect, useRef, useState } from "react";

const Career = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [num, setNumber] = useState(0);
  const focusRef = useRef(null);
  useEffect(() => {
    setName("");
    setCity("");
    focusRef.current.focus();
  }, []);
  const onSubmitForm = () => {
    const prepData = { Fname: name, CityAdress: city, phone: num };
    localStorage.setItem("firstName", name);
    console.log("prepData", prepData);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
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
            onChange={(e) => setName(e.target.value)}
            id="name"
          ></input>
        </div>
        <div>
          <label> Your City </label>
          <select id="city" onChange={(e) => setCity(e.target.value)}>
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
            onChange={(e) => setNumber(e.target.value)}
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
