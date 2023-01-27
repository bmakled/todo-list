import './App.css';
import React, {useState} from "react";


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault()

    if (newTodo.length === 0){
      return;
    }

    const todoItem ={
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem])
  }

  const handleTodoDelete = (deleteindex) =>{
    const filteredTodos = todos.filter((todo,i) => {
      return i !== deleteindex
    })

    setTodos(filteredTodos)
  }

  const handleToStrike = (index) => {
    const updatedTodos = todos.map((todo,i) => {
      if (index === i){
        todo.complete =! todo.complete;
      }
      return todo;
    })

    setTodos(updatedTodos)
  } 

  return (
    <div className="App">
      <form onSubmit={(event)=>{handleNewTodoSubmit(event);}}>
        <input onChange = {(event)=>{setNewTodo(event.target.value)}} type="text" value = {newTodo}/>
        <div>
          <button className='button' >Add</button>
        </div>
      </form>

      {todos.map((todo,i)=>{
        const todoClasses = [];
        if (todo.complete){
          todoClasses.push("strike-through")
        }

        return (
          <div key={i}>
            <span className={todoClasses.join("")}>{todo.text}</span>
            <input checked={todo.complete} type="checkbox" onChange = {(event) => {handleToStrike(i)}}/>
            <button className='button' onClick={(event)=> {handleTodoDelete(i)}}>Delete</button>
            
          </div>
        );
      })}

    </div>
  );
}

export default App;
