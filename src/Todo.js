// Creating a Todo component to print out each one of our Todos: 

import React from 'react'

export default function Todo({ todo }) {
   return (
      <div>
         {todo.name}
      </div>
   )
}
