import React from 'react'
import "./progressBar.css"
import { useState, useEffect } from 'react'

const ProgressBar = ({ value }) => {
    const [percent, setPercent] = useState(value)

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
    }, [value])

    return (
        <div className='progress_bar_container'>
            <div>Progress Bar</div>
            <div className='progress'>
                <span style={{ color: percent > 49 ? "white" : "black" }}>{percent.toFixed()}%</span>
                <div style={{ width: `${percent}%` }} role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent.toFixed()} />
            </div>
        </div>
    )
}

export default ProgressBar