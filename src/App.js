import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [x,setx] = useState([])
  const inputRef = useRef()

  const add = ()=>{
    const value = inputRef.current.value
    const newData = {done : false , value}
    setx([...x,newData])
    inputRef.current.value=""
  }
  const itemDone = (index) => {
    const newx = [...x]
    x[index].done = !x[index].done
    setx(newx)
  }
  const toDelete = (index) => {
    const newx=[...x]
    newx.splice(index,1)
    setx(newx)
  }
  return (
    <div className="App">

      <h2>To Do List</h2>

      <ul>
        {
          x.map(({value,done}, index)=>{
            return <div className='divy'>
              <li className={done?"done":""} onClick={()=>itemDone(index)}>{value}</li>
              <span onClick={()=>toDelete(index)}>X</span>
            </div>
          })
        }
      </ul>
      <input ref={inputRef} placeholder='Enter new task...'></input>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
