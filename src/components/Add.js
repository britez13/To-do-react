import { useState } from "react";
import {motion} from 'framer-motion';
import { v4 as uuid } from 'uuid';
import "./Add.css";

const Add = ({setData}) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleAdd = (e) => {
    e.preventDefault();
    if(todo.trim().length === 0) return
    setData((prev) => {
        return [{id: uuid(), name: todo, completed: false}, ...prev]
    })
    setTodo("")
  }
  return (
    <motion.form 
    className="add-form"
    initial={
      {opacity: 0}
    }
    animate={
      {opacity: 1}
    }
    transition={
      {
        duration: 2,
        delay: 1.5
      }
    }
    >
        <input className="add-input" autoFocus type="text" placeholder="New to-do" value={todo} onChange={handleChange} />
        <button className="add-btn" type="submit" onClick={handleAdd} >+</button>
    </motion.form>
  )
}

export default Add
