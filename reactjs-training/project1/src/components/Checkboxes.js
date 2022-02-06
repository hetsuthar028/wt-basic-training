import React, { Component } from 'react';

class Checkboxes extends Component {
    constructor(){
        super();
        this.state = {
            checked: false,
        }
    }

    toggleCheckbox = () => {
        let {checked} = this.state;
        this.setState({checked: !checked});
    }

    render() {
        return (
            <div>
                <h3>Checkbox Example</h3>
                <input type="checkbox" className='my-2 mx-2' checked={this.state.checked} />
                <input type="checkbox" className='my-2 mx-2' checked={!this.state.checked} />
                <br />
                <button className='btn btn-primary my-2' onClick={this.toggleCheckbox}>Toggle</button>
            </div>
        );
    }
}

export default Checkboxes;
