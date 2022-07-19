import React, { useState } from 'react'
import "./Update.css";

const Update = ({setIsUpdate, itemToUpdate, setData}) => {
  const {id, name} = itemToUpdate;
  const [todo,setTodo] = useState(name);
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    if(todo.length === 0) return;
    setData(prev => {
      const newData = prev.map(item => {
        if(item.id === id) {
          return {...item, name: todo}
        }
        return item
      })
      setIsUpdate(false)
      return newData;
    })
  }
  const handleCancel = (e) => {
    e.preventDefault();
    setIsUpdate(false)
  }
  return (
    <section className="modal-bg">
      <div className="modal-wrapper" >
        <form className="modal-form">
          <input autoFocus type="text" value={todo} onChange={handleChange}/>
          <div className="btn-wrapper">
            <button type="submit" className="update-btn" onClick={handleUpdate} >Update</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Update