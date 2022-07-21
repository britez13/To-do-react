import { useState,useEffect } from 'react'; 
import {motion} from 'framer-motion';
import Add from './components/Add';
import List from './components/List';
import InfoClear from './components/InfoClear';
import Update from "./components/Update";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});

  useEffect(() => {
    const oldData = localStorage.getItem("todos")
    if(oldData) {
      setData(JSON.parse(oldData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data))
  })

  const changeUpdate = () => {
    setIsUpdate(prev => !prev)
  }
  return (
    <>
      {isUpdate && <Update setIsUpdate={setIsUpdate} itemToUpdate={itemToUpdate} setData={setData} />}  
      <motion.main className="main-container"
      initial={
        {
          y: "-40rem"
        }
      }
      animate={
        {
          y: 0
        }
      }
      transition= {
        {
          duration: 1.5
        }
      }
      >
      <h1 className='title'>To-do App</h1>
      <Add setData={setData} />
      <List data={data} setData={setData} changeUpdate={changeUpdate} setItemToUpdate={setItemToUpdate} />
      <InfoClear data={data} setData={setData} />
      </motion.main>
    </>
  );
}

export default App;
