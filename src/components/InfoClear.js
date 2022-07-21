import React from 'react';
import "./InfoClear.css"

const InfoClear = ({data, setData}) => {
  const pendingTask = data.filter(item => item.completed === false).length;

  const getMessage = () => {
    let message = "";
    if(pendingTask === 0) {
      message = "Well done!"
    }

    if(pendingTask > 0) {
      if(pendingTask === 1) {
        message = "You have 1 pending task";
      }
      else {
        message = `You have ${pendingTask} pending tasks`
      }
    }
    return message
  }

  const handleClick = () => {
    setData([]);
  }
  return (
    <section className="info-clear">
        <p className={`pending-task ${pendingTask > 0 ? "some-todo" : "no-todo"}`}>{data.length > 0 && getMessage()}</p>
        {data.length > 1 ? <button className="clear-btn" onClick={handleClick}>Clear All</button> : ""}
    </section>
  )
}

export default InfoClear