import React from 'react'

export default ({ total }) => {
    const [state, setState] = React.useState({
        value1: 0,
        value2: 0,
        
    })

    const check = () => {
        setState()
    }

    return (
        <div>
            <input type='number' data-testid='input_one'/>
            +
            <input type='number' data-testid='input_two'/>
            =
            { total }
            <button data-testid='input_one' onClick={}></button>
            <h2 data-testid="result"></h2>
        </div>
    )
}
