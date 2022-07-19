import { useState } from 'react'; 
import Add from './components/Add';
import List from './components/List';
import InfoClear from './components/InfoClear';
import Update from "./components/Update";
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});
  const changeUpdate = () => {
    setIsUpdate(prev => !prev)
  }
  return (
    <>
      {isUpdate && <Update setIsUpdate={setIsUpdate} itemToUpdate={itemToUpdate} setData={setData} />}  
      <main className="main-container">
      <h1 className='title'>To-do App</h1>
      <Add setData={setData} />
      <List data={data} setData={setData} changeUpdate={changeUpdate} setItemToUpdate={setItemToUpdate} />
      <InfoClear data={data} setData={setData} />
      </main>
    </>
  );
}

export default App;
