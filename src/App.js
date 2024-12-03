// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react"; // Correct import

function App() {
  let [todolist, setTodolist] = useState([]);
 


  function saveTodoList(event) {
    event.preventDefault(); 
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) { // Correct method spelling
      let finalTodolist = [...todolist, toname];
      setTodolist(finalTodolist);
    } else {
      alert("This todo already exists in your list");
    }
  }

  let list = todolist.map((value , index)=>{
  
     return(
      <TodolistItems  key={index} value={value} todoindex={index}
       todolist={todolist} 
       setTodolist={setTodolist}
        />
     )
  })
   
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form className="form" onSubmit={saveTodoList}> {/* Fixed typo in className */}
        <input type="text" name="toname" />
        <button type="submit">SAVE</button>
      </form>


         <div className="outerDiv">
      <ul>
        {list}
      </ul>
         </div> 
    </div>
  );
}

export default App;


function TodolistItems ({value,todoindex,todolist,setTodolist}){
  let [status , setStatus] = useState(false)
  let deleteRow = ()=>{
    let filterData = todolist.filter((v,i)=>i!=todoindex)
    setTodolist(filterData)
  }

  function checkStatus (){
    setStatus(!status)
  }
   return(
    <li onClick={checkStatus} className={(status) ? "line" : ""}   > {todoindex+1}{value}<span  onClick={deleteRow}>&times;</span></li>
  )
}