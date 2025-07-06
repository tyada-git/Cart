import React, { useReducer } from "react";

const initialState = {
  name: "",
  city: "",
};
const ChildUseReducer = () => {
  const formReducer = (formvalues, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...formvalues, name: action.payload };
      case "SET_CITY":
        return { ...formvalues, city: action.payload };
      default:
        return formvalues;
    }
  };
  const [formvalues, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalues);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="city"
            onChange={(e) =>
              dispatch({ type: "SET_CITY", payload: e.target.value })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ChildUseReducer;
