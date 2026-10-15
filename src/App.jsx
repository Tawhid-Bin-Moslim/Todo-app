import AppName from "./components/AppName";
import InputTodo from "./components/InputTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      duedate: "21/10/2026",
    },
    {
      name: "go to collage",
      duedate: "25/10/2026",
    },
  ];
  return (
    <center className="container text-center">
      <AppName />
      <InputTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
