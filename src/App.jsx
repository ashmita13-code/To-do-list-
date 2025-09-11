import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todo,setTodo] = useState([]);

  let save_to_do=(event)=>{
    let tname= event.target.todoname.value;
    if(tname === "")
    {
      alert("A To-Do list cannot be empty!")
      return;
    }
    if(!todo.includes(tname))
    {
      let final_ans=[...todo,tname]
      setTodo(final_ans)
    }
    else{
      alert("This To-Do list already exists.")
    }
    
    event.preventDefault();
  }

  let items=todo.map((value,index)=>{
    return <TodoItems values={value} key={index} indexNumber={index} todo={todo} setTodo={setTodo}/>
  })

  return (
    <>
      <div className='container'>
        <h1>TO-DO-LIST</h1>
        <form onSubmit={save_to_do}>
          <input type="text" name="todoname"></input>
          <button>Save</button>
        </form>

        <div className='list'>
          <ul>
            {items}
          </ul>

        </div>

      </div>
     
    </>
  )
}

export default App

function TodoItems({values,indexNumber,todo,setTodo})
{
  const [cstatus,setStatus]= useState(false);
  let delete_todo=()=>{
    let final_data=todo.filter((v,i)=>i!=indexNumber)
    setTodo(final_data)
  }

  let checkstatus=()=>{
    setStatus(!cstatus)
  }

  return(
    <li onClick={checkstatus} className={(cstatus)?'complete':''}>{indexNumber+1} {values}<span onClick={delete_todo}>&times;</span></li>
  )
}
