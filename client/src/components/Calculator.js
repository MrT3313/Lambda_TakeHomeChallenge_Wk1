// IMPORTS
import React, {useState} from 'react'

// COMPONENTS
import ResultScreen from './ResultScreen.js'
import ButtonContainer from './ButtonContainer.js'

// STYLES
import '../styles/Calculator.css'

// __MAIN__
function Calculator() {
    // State
    const [result, setResult] = useState()
    // Return
    return (
        <div className="Calculator">
            <ResultScreen result={result}/>
            <ButtonContainer />
        </div>
    )
}

// EXPORT
export default Calculator