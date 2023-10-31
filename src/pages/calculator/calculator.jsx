import React from 'react'
import "./calculator.css"
const Calculator = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
            <h1>CALCULATOR</h1>
            <div style={{ width: "300px", height: "620px",display:"flex",flexDirection:"column", backgroundColor: "whitesmoke", border: '2px solid gray', borderRadius: "4px" }}>
                <input className='input_style' />
                <div className='grid_container'>
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">+</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                    <div className="grid-item">-</div>
                    <div className="grid-item">7</div>
                    <div className="grid-item">8</div>
                    <div className="grid-item">9</div>  
                    <div className="grid-item">*</div>  
                    <div className="grid-item">0</div>
                    <div className="grid-item">.</div>
                    <div className="grid-item">/</div>  
                    <div className="grid-item">=</div>  
                </div>
            </div>
        </div>
    )
}

export default Calculator