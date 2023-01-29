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
    localStorage.setItem("tasks", JSON.stringify(todos));
  };
  const isComplete = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <h1>Just do it.</h1>
      <ToDoInput onSubmit={addToDo} />
      {todos.map((task) => {
        return (
          <Task
            key={task.id}
            name={task.name}
            id={task.id}
            deleteTask={deleteTask}
            complete={task.complete}
            isComplete={isComplete}
          />
        );
      })}
    </div>
  );
}

export default App;
