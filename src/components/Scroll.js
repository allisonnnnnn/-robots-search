import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid balck",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
}
