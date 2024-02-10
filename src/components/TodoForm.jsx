import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import toast from "react-hot-toast"

export default function TodoForm() {
    const {addTodo} = useContext(TodoContext)
    const [todo, setTodo] = useState({id:Date.now(), todoItem:"" , completed: false})

    const changeHandler = (e) => {
        setTodo((prev) => {
            return {
                    ...prev,
                    [e.target.name] : e.target.value
            }
        })
    }

    // console.log("hello");
    // console.log(addTodo);
    const submit = (e) => {
        e.preventDefault();
        if(todo.todoItem.length > 0){
            addTodo(todo)
            setTodo({ id: Date.now(), todoItem: "", completed: false })
            toast.success("Todo Added")
        }
        else{
            toast(
                "Please Write Something",
                {
                  duration: 2000,
                }
              );
        }
    }
    
  return (
    <div>
        <form className="additem" onSubmit={submit}>
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Write Todo..."
              value={todo.todoItem}
              name="todoItem"
              id="item" />

            <button>Add</button>
        </form>
    </div>
  )
}
