import { useState } from "react";
import "./todos.css"

const EditTodoForm = ({todos,editTask,todo}) => {
  const [value,setValue] = useState(todo.data)
  const handleSubmit = () =>{
    editTask(value,todo.id)
    setValue("")
  }
  return(
    <div style={{paddingTop:"20px"}}>
        <input placeholder="update task" style={{background:"yellow"}} onChange={(e)=>{setValue(e.target.value)}} value={value} className="todos_input" />
        <button onClick={handleSubmit}>edit task</button>
    </div>
  )
}

export default function Todos() {
  const [inputData, setInputData] = useState("")
  const [todos, setTodos] = useState([])

  const handleTodosInput = (e) => {
    setInputData(e.target.value)
  }
  const handleAddTodos = () => {
    if(!inputData)return
    setTodos([ ...todos,{id:Date.now(),data:inputData,isComplete:false,isEditable:false}])
    setInputData("")
   
  }
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo, i) => { return todo.id !== id })
    setTodos(newTodos)
  }

  const handleEdit = (index) => {
    console.log(index,"this is the index")
    const edited = todos.map((todo)=>
      todo.id===index ? {...todo,isEditable:!todo.isEditable}:todo
    )
    setTodos(edited)
  }

  const editTask = (task,id) => {
    setTodos(todos.map((todo)=>todo.id===id ? {...todo,data:task,isEditable:!todo.isEditable}:todo))
  }
  
console.log(todos)
 
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "2rem", }}>
      <div style={{width:"auto",background:"#D3D3D3",height:"500px",padding:"20px",borderRadius:"8px"}}>
        <div>
          <input value={inputData} className="todos_input" onChange={handleTodosInput} />
          <button onClick={handleAddTodos}>add Todo</button>
        </div>
        <div>
          {todos?.map((item) => {
            return (
              item.isEditable?<EditTodoForm key={item.id} editTask={editTask} todo={item} todos={todos}/>:
              <div key={item.id} style={{display:"flex",marginTop:"10px"}}>
                <div style={{color:"white",width:"100%",background:"gray",padding:"5px"}} >{item.data}</div>
                <div onClick={() => handleDelete(item.id)} style={{ background: "red",padding:"5px"}}>del</div>
                <div onClick={()=>handleEdit(item.id)} style={{ background: "red",padding:"5px"}}>edit</div>
              </div>
              
            )
          })}
        </div>
      </div>
    </div>
  );
}
