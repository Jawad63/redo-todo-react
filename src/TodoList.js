import React from 'react'

export default function TodoList({todos}) {
   return (
      <div className="mx-3 py-2">
         {/* We are printing out our Todos here: */}
         
         {todos.length}
         
      </div>
   )
}
