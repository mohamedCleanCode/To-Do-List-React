import React from "react";

const ToDoInput = () => {
  return (
    <div className="ToDoInput">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Add a task..."></input>
        <button>I Got This!</button>
      </form>
      <p>Date, Time</p>
      <div>task</div>
    </div>
  );
};

export default ToDoInput;
