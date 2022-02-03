import React, { Component } from 'react';

class Inputs extends Component {

    constructor(){
        super();
        this.state = {
            inputData: '',
        }
    }

    handleChange = (e) => {
        this.setState({inputData: e.target.value});
    }

    render() {
        return (
            <div className='mx-4'>
                <form className='form'>
                    <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input 
                            type="text" 
                            id='username' 
                            onChange={this.handleChange} 
                            value={this.state.inputData} 
                            placeholder='Eg. hetsuthar028'
                            className='form-control'
                        />
                        {this.state.inputData ? (<h5 className='m-4'>Welcome <span className='text-primary'>@{this.state.inputData}</span></h5>) : null}
                    </div>
                </form>
            </div>
        );
    }
}

export default Inputs;
