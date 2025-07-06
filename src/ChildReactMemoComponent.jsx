import React from "react";
import "./App.css";
const ChildReactMemoComponent = React.memo(({ name, age }) => {
  console.log("i am called");
  return (
    <section className="my-info">
      <h1>My Info</h1>
      <>My Name {name}</>
      <>My Age {age}</>
    </section>
  );
});

export default ChildReactMemoComponent;
