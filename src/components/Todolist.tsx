import React from 'react'
import { Todo } from './model'
import "./style.css"
import Singletodo from './Singletodo'
interface prop{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

function Todolist({todos,setTodos}:prop) {
  return (
   <div className="todos">
    {
        todos.map((tod)=>(
            <Singletodo tod={tod} key={tod.id} todos={todos}/>
        ))
    }
   </div>
    )
}

export default Todolist