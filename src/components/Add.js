import { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./Add.css";

const Add = ({setData}) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleAdd = (e) => {
    e.preventDefault();
    if(todo.length === 0) return
    setData((prev) => {
        return [{id: uuid(), name: todo, completed: false}, ...prev]
    })
    setTodo("")
  }
  return (
    <form className="add-form">
        <input className="add-input" autoFocus type="text" placeholder="New to-do" value={todo} onChange={handleChange} />
        <button className="add-btn" type="submit" onClick={handleAdd} >+</button>
    </form>
  )
}

export default Add
