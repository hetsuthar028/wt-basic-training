import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    handleClick = (increaseBy) => {
        let {counter} = this.state;
        this.setState({counter: counter+increaseBy});
    }

    render() {
        return (
            <div>
                <h3>Counter Example</h3>
                <p>Counter : {this.state.counter} </p>
                <p>Increase counter by:</p>
                <div>
                    <button className='btn btn-info mx-2' onClick={() => this.handleClick(10)}>10</button>
                    <button className='btn btn-info mx-2' onClick={() => this.handleClick(20)}>20</button>
                    <button className='btn btn-info mx-2' onClick={() => this.handleClick(30)}>30</button>
                    <button className='btn btn-info mx-2' onClick={() => this.handleClick(40)}>40</button>
                    <br />
                    <button className='btn btn-info my-2' onClick={() => this.setState({counter: 0})}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;
