import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
   return (
      //maping over all Todos: 
      todos.map(todo => {
         // The key allows react to only change the componnets that actually change inside of our array instead of changing all of them every single time:
         return <Todo key={todo.id} todo={todo} />
      })
   )
}
