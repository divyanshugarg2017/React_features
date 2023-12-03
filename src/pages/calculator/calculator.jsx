import React,{useState} from 'react'
import "./calculator.css"
const Calculator = () => {
    const [result,setResult] = useState("")

    const handleClick = (e) => {
        console.log(e.target.name)
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult("")
    }
    const backspace = () => {
        if(result.length>1){setResult(result.slice(0,result.length-1))
        }
    else{setResult("")}
    }
    const evaluate = () => {
       setResult(eval(result))
    }
    return (
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
            <h1>CALCULATOR</h1>
            <div style={{ width: "auto", height: "620px",display:"flex",flexDirection:"column", backgroundColor: "whitesmoke", border: '2px solid gray', borderRadius: "4px" }}>
                <input readOnly type='text' value={result} className='input_style' />
                <div className='grid_container'>
                <button onClick={clear} id="clear" className="grid-item">clear</button> 
                <button onClick={backspace} id="backspace" className="grid-item">C</button> 
                    <button name="1" onClick={handleClick} className="grid-item">1</button>
                    <button name="2" onClick={handleClick} className="grid-item">2</button>
                    <button name="3" onClick={handleClick} className="grid-item">3</button>
                    <button name="+" onClick={handleClick} className="grid-item">+</button>
                    <button name="4" onClick={handleClick} className="grid-item">4</button>
                    <button name="5" onClick={handleClick} className="grid-item">5</button>
                    <button name="6" onClick={handleClick} className="grid-item">6</button>
                    <button name="-" onClick={handleClick} className="grid-item">-</button>
                    <button name="7" onClick={handleClick} className="grid-item">7</button>
                    <button name="8" onClick={handleClick} className="grid-item">8</button>
                    <button name="9" onClick={handleClick} className="grid-item">9</button>  
                    <button name="*" onClick={handleClick} className="grid-item">*</button>  
                    <button name="0" onClick={handleClick} className="grid-item">0</button>
                    <button name="." onClick={handleClick} className="grid-item">.</button>
                    <button name="/" onClick={handleClick} className="grid-item">/</button>  
                    <button name="=" onClick={evaluate} className="grid-item">=</button>  
                </div>
                
            </div>
        </div>
    )
}

export default Calculator