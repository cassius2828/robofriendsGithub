import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{ border: "3px solid black", height: "500", overflowY: "scroll" }} >
      {props.children}
    </div>
  );
};

export default Scroll;
