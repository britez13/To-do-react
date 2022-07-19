import React from 'react';
import "./InfoClear.css"

const InfoClear = ({data, setData}) => {
  const pendingTask = data.filter(item => item.completed === false).length
  const handleClick = () => {
    setData([]);
  }
  return (
    <section className="info-clear">
        {pendingTask > 0 ? <p className="task-pending">You have {pendingTask} pending {pendingTask===1 ? "task" : "tasks"}</p> : "" }
        {data.length > 1 ? <button className="clear-btn" onClick={handleClick}>Clear All</button> : ""}
    </section>
  )
}

export default InfoClear