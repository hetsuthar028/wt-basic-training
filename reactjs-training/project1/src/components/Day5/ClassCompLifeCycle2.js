import React, { Component } from 'react';

class Classcomplifecycle2 extends Component {

    constructor(props){
        super();
        this.state = {
            childCounter: 1,
        }
        console.log("Child -> constructor");
    }

    componentDidMount(){
        console.log("Child -> componentDidMount");
    }

    handleClick = () => {
        let {childCounter} = this.state;
        this.setState({childCounter: childCounter+1});
    }

    // shouldComponentUpdate(props1, props2){
    //     console.log(props1, props2)
    //     return false
    // }

    componentDidUpdate(){
        console.log("Child -> componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child -> componentWillUnmount")
    }

    render() {
        console.log("Child -> render");
        let {counter} = this.props;
        return (
            <div>
                Child Component - {counter} (Props)
                <br />
                <br />
                Child Component - {this.state.childCounter} (State)
                <button className='btn btn-success' onClick={this.handleClick}>Child Counter</button>
            </div>
        );
    }
}

export default Classcomplifecycle2;
