// Creating a Todo component to print out each one of our Todos: 

import React from 'react'

export default function Todo({ todo, toggleTodo }) {

   function handleTodoClick() {
      toggleTodo(todo.id)
   }

   return (
      <div>
         {/*need to have checkbox by todos */}
         <label>

            <input type="checkbox" className="checkbox" checked={todo.complete} onChange = {handleTodoClick} />
            {todo.name}
               
         </label>
      </div>
   )
}
