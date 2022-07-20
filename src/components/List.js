import {motion, AnimatePresence} from 'framer-motion';
import { ReactComponent as DeleteLogo } from '../assets/delete-svgrepo-com.svg';
import { ReactComponent as UpdateLogo } from '../assets/pencil-with-eraser-svgrepo-com.svg';
import "./List.css"

const List = ({data, setData, changeUpdate, setItemToUpdate}) => {

  const handleChecked = (e, id) => {
    const newData = data.map(item => {
      if(item.id === id) {
        return {...item, completed: !item.completed}
      }
      return item  
    })
    setData(newData);
  }
    
  const handleUpdateClick = (id, name, completed) =>  {
    setItemToUpdate({id: id, name: name, completed})
    changeUpdate()
  }

  const handleDeleteItem = (id) => {
    const newData = data.filter(item => item.id !== id)
    setData(newData);
  }
  return (
    <section className="items-container">
        {data.map( ({id, name, completed}) => {        
            return (
              <motion.article 
              className="item" key={id}
              initial= {
                {
                  opacity: 0
                }
              }
              animate={
                {
                  opacity: 1
                }
              }
              transition= {
                {
                  duration: .5
                }
              }
              exit={{ opacity: 0 }}
              >
                <div className="item-name">
                  <input className="item-input" onChange={(e)=>handleChecked(e, id)} type="checkbox" id={id} name={name} />
                  <label className={completed ? "completed" : ""} htmlFor={name}>{name}</label>
                </div>
                <div className="item-actions">
                  <div className="update-logo">
                    <UpdateLogo onClick={() => handleUpdateClick(id, name, completed)} />
                  </div>
                  <div className="delete-logo">
                    <DeleteLogo onClick={() => handleDeleteItem(id)  } />
                  </div>
                </div>
              </motion.article>)
        })}
    </section>
  )
}

export default List