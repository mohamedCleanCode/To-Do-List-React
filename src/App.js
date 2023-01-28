import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import ToDoInput from "./components/ToDoInput";

function App() {
  let [todos, setTodos] = useState([]);
  const addToDo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div className="App">
      <h1>Just do it.</h1>
      <ToDoInput onSubmit={addToDo} />
      {todos.map((task) => {
        return <Task key={task.id} name={task.name} />;
      })}
    </div>
  );
}

export default App;
