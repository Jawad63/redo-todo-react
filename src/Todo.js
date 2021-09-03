// Creating a Todo component to print out each one of our Todos: 

import React from 'react'

export default function Todo({ todo }) {
   return (
      <div>
         {/*need to have checkbox by todos */}
         <label>

            <input type="checkbox" checked={todo.complete} />
            {todo.name}
               
         </label>
      </div>
   )
}
