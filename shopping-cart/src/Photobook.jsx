import React, { useReducer } from "react";

const initialState = {
  age: 0,
  num: 0,
};
const allFormHandler = (formData, action) => {
  switch (action.type) {
    case "SET_AGE": {
      return { ...formData, age: action.payload };
    }
    case "SET_NUM": {
      return { ...formData, num: action.payload };
    }
  }
};

const PhotoBook = () => {
  const [formData, dispatch] = useReducer(allFormHandler, initialState);
  console.log("formdata-", formData);
  const handleDataSubmit = () => {};
  return (
    <>
      <div>
        <form onSubmit={handleDataSubmit}>
          <input
            type="text"
            placeholder="add age here"
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
          />
          <button>Add age</button>
          <input type="number" placeholder="add number here" />
          <button>Add Number</button>
          <input type="text" placeholder="add Adress here" />
          <button>Add Adress</button>
          <input type="text" placeholder="add email here" />
          <button>Add Email</button>
          <input type="number" placeholder="add salary here" />
          <button>Add Salary</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default PhotoBook;
