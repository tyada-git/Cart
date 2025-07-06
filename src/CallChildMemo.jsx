import React from "react";

const CallChildMemo = React.memo(({ setName }) => {
  console.log(" i am child memo");
  const handleInputChange = (e) => {
    console.log(" -----input created");
    setName(e.target.value);
  };
  return (
    <>
      <p> this comp uses React.memo</p>
      <p> this is a pure component</p>
      <input type="text" onChange={handleInputChange} />
    </>
  );
});
export default CallChildMemo;
