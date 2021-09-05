// need to store all of the changes/todos inside of a state so we can render those todos and everytime we add a todo, change a todo or delete a todo it will render the entire component tree for us. For that we will use: useState hook.
// To get access to the name inside field input we'll use UseRef Hook: It will allows us to reference elements inside our HTML. for us the input field.
// we need to save our data to local storage for that we will use UseEffect.
import React, { useState, useRef, useEffect } from "react";

// connecting app with TodoList.js:
import TodoList from "./TodoList";

// uuid generator:
import { stringify, v4 as uuidv4 } from 'uuid';


/////////////////////////////////////////////////////////////////////////////////

  const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // adding a default state of an empty array: got no todos at the moment->

  // use state returns an array []: We can destructure that array and set it to useState. Object destructuring: it allows us to extract multiple pieces of data from an array or object and assign them to their own variables.

  //First element(todos) we'll add will be all of our todos. And the second element (setTodos) will be a function that will help us update our Todos.

                   
  const [todos, setTodos] = useState([]);

  //creating a variable for name reference:
  const todoNameRef = useRef()

  // We'll use this effect to load our Todos. We only want to call this one when our componnet loads so by passing an empty array it'll call this once and since the empty array never changes it'll never call this useEffect again. 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if we have storedTodos then set our todos to our storedTodos:
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // Everytime something changes we want to call the first function & when we want call the function, for that we will pass an array of properties: anytime in the array something changes we want to call useEffect. 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // this is for toggle: We need to pass the id of the todo which we want to toggle. Then we want to toggle a todo from our list:
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  // creating handleAddTodo function:
  // e = event property.
  function handleAddTodo(e) {
    // here we need to set our Todos to one more Todo, take the previous todo add the new one and set them to our TODO list: 
    // .current allows us to reference any element that we are currently refereing to in our case the input:
    // .value will give us the value of our input:

    const name = todoNameRef.current.value
    if (name === '') return
    // setting our todos: 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })

    // by assigning our current value to null, when hit Add Todo the value will disappear and we type in another value:  
    todoNameRef.current.value = null
  }

  // This function will clear our todos upon clicking the delete button: 
  function handleClearTodo() {
    // we are going to set our todos to a new list that doesn't have any of our complete ones: 
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    // adding the input for new Todo:
    // A fragment(<></>) will allow us to return multiple things. A JS function will only return one thing that's why we have to use an empty element here.
    <>
      
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      
      <input type="text" ref={todoNameRef} />

      {/* creating an onclick so when we can add our todos to the list */}
      <button className="btn btn-primary mx-2" onClick={handleAddTodo}>Add Todo</button>

      {/* This will delete a todo: */}
      <button className="btn btn-danger mx-2" onClick={handleClearTodo}>Delete Todo</button>

      {/* This will tell us how many todos are left: */}
      <h3 className="mx-3">How many todos left: {todos.filter(todo => !todo.complete).length}</h3>

    </>
  )
}

export default App;

