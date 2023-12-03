import logo from './logo.svg';
import Pagination from './pages/pagination/pagination';
import Calculator from './pages/calculator/calculator';
import ProgressBar from './pages/progressBar/progressBar';
import Todos from "./pages/todos/todos"
import Passwordgenerator from './pages/passwordgenerator/passwordgenerator';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setValue((val)=>val+1)
    }, 100);
  }, [])
  

  return (
    <div className="App">
     {/* <Pagination/> */}
     <Calculator/>
     {/* <ProgressBar value={value}/> */}
     {/* <Passwordgenerator/> */}
    </div>
  );
}

export default App;
