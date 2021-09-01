import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    // adding the input for new Todo:
    // A fragment(<></>) will allow us to return multiple things. A JS function will only return one thing that's why we have to use an empty element here.
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Delete Todo</button>
    </>
      
  )
}

export default App;

