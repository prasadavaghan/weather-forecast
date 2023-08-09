import React from 'react'
import './Toggle.css'
export default function Toggle({ setUnit, unit }) {

    return (
        <div className="toggle">
            <span className="toggle-label">Celsius</span>
            <input
                type="checkbox"
                id="toggle-switch"
                className="hidden-checkbox" // Add this class
                checked={unit === 'imperial'}
                onChange={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
            />
            <label htmlFor="toggle-switch" className="toggle-switch"></label>
            <span className="toggle-label">Fahrenheit</span>
        </div>
    )
}
