import React from 'react'

class ClassCounter extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(x => ({
            count: x.count + 1
        }))
    }

    render(){
        return (
            <div>
                <h1 data-testid="count">{this.state.count}</h1>
                <button data-testid="plus" onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default ClassCounter