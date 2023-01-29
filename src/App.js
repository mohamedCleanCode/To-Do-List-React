import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task";
import ToDoInput from "./components/ToDoInput";

const getDateFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

function App() {
  let [todos, setTodos] = useState(getDateFromLocalStorage());
  const addToDo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <h1>Just do it.</h1>
      <ToDoInput onSubmit={addToDo} />
      {todos.map((task) => {
        return <Task key={task.id} name={task.name} deleteTask={deleteTask} />;
      })}
    </div>
  );
}

export default App;
