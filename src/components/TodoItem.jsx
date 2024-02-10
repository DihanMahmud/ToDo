import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import toast from "react-hot-toast"

export default function TodoItem({todo}) {
  const {completed, todoItem, id} = todo
  const {deleteTodo, toggleComplete, updateTodo} = useContext(TodoContext)

  const [edit, setEdit] = useState(false)
  const [msg, setMsg] = useState(todoItem)

  const changeHandler = () => {
    if (edit) {
      toast.error("Please Save First")
    }
    // here is some confusing points, completed is false thats why it goes to else condition, then it toggle the false to true and toast is success
    else{
      if (completed) {
        //true chilo, toggle er dara false hoy, means task is incomplete
        toggleComplete(id)
        toast.error("Task Incomplete")
      }
      else{
        //false chilo, toggle er dara true hoy, means task is completed
        toggleComplete(id)
        toast.success("Task Completed")
      }
    }
  }

  const deleteHandler = () => {
    deleteTodo(id)
    toast.error("Successfully Deleted")
  }

  const editHandler = () => {
    setEdit(true)
    // toast.success("Todo is Editable")
    toast(
      "Todo is Editable",
      {
        duration: 2000,
      }
    );
  }
  
  const saveHandler = () => {
    updateTodo(id, msg)
    setEdit(false)
    toast.success("Successfully Saved")
  }

  return (
    <div className={completed ? "item active" : "item"}>
      <input
       type="checkbox"
       onChange={changeHandler}
       checked={completed}
       name="completed" id="" />
      <input
       className={completed ? "active" : ""}
       readOnly={!edit}
       onChange={(e) => setMsg(e.target.value)}
       value={msg}
       type="text" />
      {
        edit ? <button  onClick={saveHandler}>📁</button> : <button disabled={completed} onClick={editHandler}>✏️</button>
      }
      <button onClick={deleteHandler}>❌</button>
    </div>
  )
}