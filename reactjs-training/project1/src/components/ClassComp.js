import React from 'react';
// import './ClassComp.css';

class ClassComp extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 1,
            clients: [
                {id: 101, name: 'A1 Pvt. Ltd.', address: 'Mumbai'},
                {id: 102, name: 'A2 Pvt. Ltd.', address: 'Ahmedabad'},
                {id: 103, name: 'A3 Pvt. Ltd.', address: 'Pune'},
                {id: 104, name: 'A4 Pvt. Ltd.', address: 'Mehsana'},
                {id: 105, name: 'A5 Pvt. Ltd.', address: 'Bangalore'},
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let {counter} = this.state
        this.setState({
            counter: ++counter
        })
        console.log("Count value", this.state.counter);
    }

    render(){
        return(
            <div>
                Counter value - {this.state.counter}
                <button className='btn btn-primary mx-2 my-2' onClick={this.handleClick}>Count</button>
                <div>
                    <table border="1" style={{tableLayout: 'fixed'}} cellSpacing="0">
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr>
                        
                        {this.state.clients.map((client, idx) => (
                            <tr key={idx}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.address}</td>
                                
                                <td><a href="#">Website</a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ClassComp;