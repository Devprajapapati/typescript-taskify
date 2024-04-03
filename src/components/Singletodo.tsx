
import { Todo } from './model'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

interface prop{
    tod:Todo,
    todos:Todo[],
    key:number
}

function Singletodo({tod,todos,key}:prop) {
  return (
    <form action="" className='todos__single'>
        <span className='todos__single__text'>{tod.todo}</span>

        <div>
            <span className="icon"><CiEdit/></span>
            <span className="icon"><MdDelete/></span>
            <span className="icon"><IoCheckmarkDoneSharp/></span>
        </div>
    </form>
  )
}

export default Singletodo