
import { useRef } from "react"
import "./style.css"



interface Todo{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd(e:React.FormEvent):void
}

function Inputfeild({todo,setTodo,handleAdd}:Todo){

    const inputref = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e)
                                       inputref.current?.blur()}}>
        <input 
        ref={inputref}
        type="text" 
        placeholder='Enter a task' 
        className='input__box'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='input_submit ' type='submit'>Go</button>
    </form>
  )
}

export default Inputfeild