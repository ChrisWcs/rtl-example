import React from 'react'

export default ({ total }) => {
    const [input1, setInput1] = React.useState(0)
    const [input2, setInput2] = React.useState(0)
    const [status, setStatus] = React.useState(false)

    const update1 = e => setInput1(Number(e.target.value))
    const update2 = e => setInput2(Number(e.target.value))

    const checkAnswer = () => setStatus(input1 + input2 === total)

    return(
        <div>
            <label>Number 1
                <input type="Number" 
                       value={input1} 
                       placeholder='Place the first number here!'
                       onChange={update1}/>
            </label>
            <h2>+</h2>
            <label>Number 2
                <input type="Number" 
                       value={input2}
                       onChange={update2}/>
            </label>
            <h2>=</h2>
            <h2>total</h2>
            <button data-testid="check" onClick={checkAnswer}>Check Answer</button>
            <h2 data-testid="result">{status ? 'Good' : 'Wrong'}</h2>
        </div>
    )
}
