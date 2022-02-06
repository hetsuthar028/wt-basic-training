import React, { Component } from 'react';

class Inputs extends Component {

    constructor(){
        super();
        this.state = {
            inputData: '',
            extendedFocusClass: '',
        }
    }

    handleChange = (e) => {
        this.setState({inputData: e.target.value});
    }

    handleFocus = (e) => {
        // @Approach - 1 | Modifying the styles of DOM Element directly
        e.target.style.backgroundColor = 'lightgreen';

        // @Approach - 2 | Changing the className
        // this.setState({extendedFocusClass: 'bg-primary'});
    }

    handleBlur = (e) => {
        // @Approach - 1 | Modifying the styles of DOM Element directly
        e.target.style.backgroundColor = 'transparent';

        // @Approach - 2 | Changing the className
        // this.setState({extendedFocusClass: ''});
    }

    handleKeyUp = (e) => {
        console.log("onKeyUp()", e.key, e.keyCode);
    }

    handleKeyPress = (e) => {
        console.log("onKeyPress()", e.key, e.keyCode);
    }

    handleKeyDown = (e) => {
        console.log("onKeyDown()", e.key, e.keyCode);
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
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onKeyUp={this.handleKeyUp}
                            onKeyDown={this.handleKeyDown}
                            onKeyPress={this.handleKeyPress}
                            value={this.state.inputData} 
                            placeholder='Eg. hetsuthar028'
                            className={'form-control' + ' ' + this.state.extendedFocusClass}
                        />
                        {this.state.inputData ? (<h5 className='m-4'>Welcome <span className='text-primary'>@{this.state.inputData}</span></h5>) : null}
                    </div>
                </form>
            </div>
        );
    }
}

export default Inputs;
