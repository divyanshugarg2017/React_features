import { useState } from "react";

export default function Todos() {
  const [inputData, setInputData] = useState()
  const [todos, setTodos] = useState([])

  const handleTodosInput = (e) => {
    setInputData(e.target.value)
  }
  const handleAddTodos = () => {
    setTodos([inputData, ...todos])
    setInputData("")
  }
  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => { return i !== index })
    setTodos(newTodos)
  }
  console.log(todos)

  return (
    <div>
      <div>
        <input value={inputData} className="todos_input" onChange={handleTodosInput} />
        <button onClick={handleAddTodos}>add Todo</button>
      </div>
      <div>
        {todos?.map((item, index) => {
          return (
            <div key={index}>{item}<span onClick={() => handleDelete(index)} style={{ background: "red" }}>del</span></div>
          )
        })}
      </div>

    </div>
  );
}
