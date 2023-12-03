import React, { useState, useCallback } from 'react'
import "./passwordgenerator.css"

const Passwordgenerator = () => {
    const [length, setLength] = useState(8)
    const [character, setCharacter] = useState(false)
    const [number, setNumber] = useState(false)
    const [password, setPassword] = useState()

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (number) {
            str += "0123456789"
        }
        if (character) {
            str += "!@#$%^&*()"
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass = str.charAt(char)
        }
        setPassword(pass)

    }, [length, number, character, setPassword])
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div>
                <h1 style={{ color: 'white' }}>Password generator</h1>
                <div style={{ width: "500px", height: "200px", background: "gray", padding: "20px", borderRadius: "16px" }}>
                    <div>
                        <input value={password} readOnly style={{ width: "70%" }} type='text' />
                        <span><button style={{ width: "20%" }}>copy</button></span>
                    </div>
                    <div>
                        <input min={6} max={100} onChange={(e)=>setLength(e.target.value)} value={length} type='range' />
                        <label>length:{length}</label>
                        <input type='checkbox' />
                        <label>Number</label>
                        <input type='checkbox' />
                        <label>characters</label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Passwordgenerator