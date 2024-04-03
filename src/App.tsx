import { useState } from "react"
import "./App.css"
import Inputfeild from "./components/Inputfeild"
import { Todo } from "./components/model"
import Todolist from "./components/Todolist"

function App() {
  const [todo,setTodo] = useState<string>('')
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
      e.preventDefault()
      if(todo){
        setTodos([...todos,{
          id:Date.now(),
          todo:todo,
          isDone:false
        }])
        setTodo('')
      }
  }
  console.log(todos);
  

  return (
    <>
     <div className="App">
      <span className="heading">Taskify</span>
      <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos} />
     </div>
    </>
  )
}

export default App
