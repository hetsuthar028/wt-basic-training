import React, { Component } from "react";

class Gridfiltering extends Component {

    constructor(){
        super();
        this.state = {
            clients: [
                {clientId: 101, clientName: 'A1 Pvt Ltd.', dueAmount: 50000, type: 'local'},
                {clientId: 102, clientName: 'A2 Pvt Ltd.', dueAmount: 80000, type: 'central'},
                {clientId: 103, clientName: 'A3 Pvt Ltd.', dueAmount: 20000, type: 'central'},
                {clientId: 104, clientName: 'A4 Pvt Ltd.', dueAmount: 40000, type: 'central'},
                {clientId: 105, clientName: 'A5 Pvt Ltd.', dueAmount: 90000, type: 'local'},
                {clientId: 106, clientName: 'A6 Pvt Ltd.', dueAmount: 10000, type: 'central'},
                {clientId: 107, clientName: 'A7 Pvt Ltd.', dueAmount: 45000, type: 'central'},
                {clientId: 108, clientName: 'A8 Pvt Ltd.', dueAmount: 67000, type: 'central'},
                {clientId: 109, clientName: 'A9 Pvt Ltd.', dueAmount: 90000, type: 'local'},
                {clientId: 110, clientName: 'A10 Pvt Ltd.', dueAmount: 65000, type: 'central'},
            ],
            filteredClients: [],
        }
    }

    handleFilterClients = (type) => {
        if(type == 'all'){
            return this.setState({filteredClients: this.state.clients});    
        }
        let filteredData = this.state.clients.filter((client, idx) => {
            return client.type == type
        });
        
        this.setState({filteredClients: filteredData});
    }

    componentDidMount(){
        this.setState({filteredClients: this.state.clients});
    }


    render() {
        let {filteredClients} = this.state;
        return (
            <div>
                <h3>Grid Filtering</h3>
                <div className="row my-3">
                    <div className="col-md-3 m-auto">
                        <button className="btn btn-info mx-2" onClick={() => this.handleFilterClients('local')}>Local</button>
                        <button className="btn btn-info mx-2" onClick={() => this.handleFilterClients('central')}>Central</button>
                        <button className="btn btn-info mx-2" onClick={() => this.handleFilterClients('all')}>All</button>
                    </div>
                </div>
                <div className="row px-4">
                    <table>
                        <tbody>
                            <tr>
                                <th>Client Id</th>
                                <th>Client Name</th>
                                <th>Due Amount</th>
                                <th>Type</th>
                            </tr>
                                {filteredClients.map((client, idx) => (
                                    <tr key={idx}>
                                        <td>{client.clientId}</td>
                                        <td>{client.clientName}</td>
                                        <td>{client.dueAmount}</td>
                                        <td>{client.type}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Gridfiltering;
