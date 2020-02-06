import React, {Component} from 'react';

class Counter extends Component {
    
    state = { count: 1 }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1})
    }
    render() { 
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Click</button>
            </div>
          );
    }
}
 
export default Counter;