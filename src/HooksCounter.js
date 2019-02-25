import React from 'react'

const HooksCounter = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 data-testid="count">{count}</h1>
            <button data-testid="plus" onClick={increment}>+</button>
        </div>
    )
}

export default HooksCounter