import React, { useState } from "react";
import shortid from "shortid";

const ToDoInput = (props) => {
  let date = new Date();
  let ampm = date.getHours() >= 12 ? "pm" : "am";
  const [text, setText] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      name: text,
      complete: false,
    });
    setText("");
  };

  return (
    <div className="ToDoInput">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={handelSubmit}>
          I Got This!
        </button>
      </form>
      <span style={{ display: "inline-block", marginRight: "10px" }}>
        {date.toLocaleDateString()}
      </span>
      <span style={{ display: "inline-block", marginRight: "5px" }}>
        {date.toLocaleTimeString() + ampm}
      </span>
    </div>
  );
};

export default ToDoInput;
