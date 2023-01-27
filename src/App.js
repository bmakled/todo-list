import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, newTodo])
  }

  const handleTodoDelete = (deleteindex) =>{
    const filteredTodos = todos.filter((todo,i) => {
      return i != deleteindex
    })

    setTodos(filteredTodos)
  }

  return (
    <div className="App">
      <form onSubmit={(event)=>{handleNewTodoSubmit(event);}}>
        <input onChange = {(event)=>{setNewTodo(event.target.value)}} type="text" value = {newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo,i)=>{
        return (
          <div key={i}>
            <span>{todo}</span>
            <button onClick={(event)=> {handleTodoDelete(i)}}>Delete</button>
          </div>
        );
      })}

    </div>
  );
}

export default App;
