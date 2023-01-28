import React, { useState } from "react";

const ToDoInput = () => {
  const date = new Date();
  let ampm = date.getHours() >= 12 ? "pm" : "am";
  const [text, setText] = useState("");

  return (
    <div className="ToDoInput">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Add a task..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button>I Got This!</button>
      </form>
      <span style={{ display: "inline-block", marginRight: "10px" }}>
        {date.toLocaleDateString()}
      </span>
      <span style={{ display: "inline-block", marginRight: "5px" }}>
        {date.toLocaleTimeString() + ampm}
      </span>
      <div>task</div>
    </div>
  );
};

export default ToDoInput;
