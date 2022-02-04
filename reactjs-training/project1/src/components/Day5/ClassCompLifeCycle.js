import React, {Component} from 'react';
import Classcomplifecycle2 from './ClassCompLifeCycle2';

class ClassCompLifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            counter: 1,
            showChild: false,
        }
        console.log("Parent -> constructor");
    }

    componentDidMount(){
        console.log("Parent -> componentDidMount");
    }

    componentDidUpdate(){
        console.log("Parent -> componentDidUpdate");
    }

    handleCounterClick = () => {
        let {counter} = this.state;
        this.setState({counter: counter+1});
    }

    handleShowChild = () => {
        let {showChild} = this.state;
        this.setState({showChild: !showChild});
    }

    render(){
        let { counter, showChild } = this.state;
        console.log("Parent -> render");
        return(
            <div>
                Parent Component - {counter}
                <button className='btn btn-primary m-2' onClick={this.handleCounterClick}>Counter</button>
                <button className='btn btn-primary m-2' onClick={this.handleShowChild}>Show Child</button>
                {showChild ? <Classcomplifecycle2 counter={counter} />: null}
                
            </div>
        )
    }
}

export default ClassCompLifeCycle;