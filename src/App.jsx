import AppName from "./components/AppName";
import InputTodo from "./components/InputTodo";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import "./App.css";
function App() {
  return (
    <center className="container text-center">
      <AppName />
      <InputTodo />
      <div className="items-container ">
        <Todo1 />
        <Todo2 />
      </div>
    </center>
  );
}

export default App;
