// need to store all of the changes/todos inside of a state so we can render those todos and everytime we add a todo, change a todo or delete a todo it will render the entire component tree for us. For that we will use: useState hook.
import React, { useState, useRef } from "react";
// connecting app with TodoList.js:
// To get access to the name inside field input we'll use UseRef Hook: It will allows us to reference elements inside our HTML. for us the input field.
import TodoList from "./TodoList";




function App() {
  // adding a default state of an empty array: got no todos at the moment->

  // use state returns an array []: We can destructure that array and set it to useState. Object destructuring: it allows us to extract multiple pieces of data from an array or object and assign them to their own variables.

  //First element(todos) we'll add will be all of our todos. And the second element (setTodos) will be a function that will help us update our Todos.

                    
  const [todos, setTodos] = useState([]);

  //creating a variable for name reference:
  const todoNameRef = useRef()

  // creating handleAddTodo function:
  // e = event property.
  function handleAddTodo(e) {
    // here we need to set our Todos to one more Todo, take the previous todo add the new one and set them to our TODO list: 
    // .current allows us to reference any element that we are currently refereing to in our case the input:
    // .value will give us the value of our input:

    const name = todoNameRef.current.value
    if (name === '') return
      console.log(name)

  }


  return (
    // adding the input for new Todo:
    // A fragment(<></>) will allow us to return multiple things. A JS function will only return one thing that's why we have to use an empty element here.
    <>
      <TodoList todos = {todos} />
      <input type="text" ref={todoNameRef} />
      {/* creating an onclick so when we can add our todos to the list */}
      <button className="btn btn-primary mx-2" onClick={handleAddTodo}>Add Todo</button>
      <button className="btn btn-danger mx-2">Delete Todo</button>
      <h3 className="mx-3">How many left to do?</h3>
    </>
  )
}

export default App;

