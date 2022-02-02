import React, { Component } from "react";
import "./ClassComp.css";
import "./ClassExercise.css";

class Classexercise extends Component {
    constructor() {
        super();
        this.state = {
            clients: [
                {
                    id: 101,
                    name: "A1 Pvt. Ltd.",
                    address: "Mumbai",
                    status: "active",
                },
                {
                    id: 102,
                    name: "A2 Pvt. Ltd.",
                    address: "Ahmedabad",
                    status: "disabled",
                },
                {
                    id: 103,
                    name: "A3 Pvt. Ltd.",
                    address: "Pune",
                    status: "active",
                },
                {
                    id: 104,
                    name: "A4 Pvt. Ltd.",
                    address: "Mehsana",
                    status: "disabled",
                },
                {
                    id: 105,
                    name: "A5 Pvt. Ltd.",
                    address: "Bangalore",
                    status: "active",
                },
            ],
            clientStatus: undefined,
            showDeleteSection: false,
            selectedIndex: -1,
            newClient: {
                id: undefined,
                name: "",
                address: "",
                status: "",
            },
            showErrorMessage: false,
            showSuccessMessage: false,
        };
    }

    handleSelect(status) {
        this.setState({
            clientStatus: status,
        });
    }

    handleDelete(itemIdx) {
        // Approach - 1
        // @parameter - clientId
        // let updatedClient = this.state.clients.filter((client, idx) => {
        //     return client.id != clientId
        // });
        // this.setState({clients: updatedClient})

        // Approach - 2
        // @parameter - itemIdx
        // let {clients} = this.state;
        // clients.splice(itemIdx, 1);
        // this.setState({clients: clients});

        // Sets the showDeleteSection state to the reverse value
        // Display section -> if -> true
        this.setState({
            showDeleteSection: !this.state.showDeleteSection,
            selectedIndex: itemIdx,
        });
    }

    handleDeleteYes() {
        let { clients } = this.state;
        clients.splice(this.state.selectedIndex, 1);
        this.setState({ clients, showDeleteSection: false });
    }

    handleDeleteNo() {
        this.setState({ showDeleteSection: false });
    }

    handleInputChange(e) {
        let { name, value } = e.target;
        // console.log(name, value)
        this.setState({
            ...this.state,
            newClient: {
                ...this.state.newClient,
                [name]: value,
            },
        });
    }

    // Returns a promise
    // @resolve -> if all fields are non-empty
    // @reject -> if any of the field is empty
    validateNewClient(){
        return new Promise((resolve, reject) => {
            let {id, name, address, status} = this.state.newClient;
            id = id.trim();
            name = name.trim();
            address = address.trim();
            status = status.trim();

            if(id && name && address && status){
                if(id !='' && name !='' && address !='' && status !=''){
                    resolve(true)
                }
            }
            else {
                reject(false);
            }
        })
    }

    // handles form submit
    handleFormSubmit(e) {
        e.preventDefault();
        
        // Calling the field validation method
        this.validateNewClient().then((result) => {
            let {clients} = this.state;
            clients.push(this.state.newClient);

            let newClient = {
                id: '',
                name: '',
                address: '',
                status: '',
            }

            this.setState({clients, newClient, showSuccessMessage: true});

            let interval = setTimeout(() => {
                this.setState({showSuccessMessage: false});
            }, 3000);
            
        }).catch((err) => {
            this.setState({showErrorMessage: true});

            let interval = setTimeout(() => {
                this.setState({showErrorMessage: false});
            }, 3000);
        })
        
    }

    render() {
        return (
            
            <div>
                <h3 className="p-3">
                    Client Status: {this.state.clientStatus}{" "}
                </h3>
                <div className="row">
                    <div className="col-md-4 py-2 px-5">
                        <form method="POST" onSubmit={(e) => this.handleFormSubmit(e)}>
                            <div className="form-group">
                                <label
                                    htmlFor="client-id"
                                    className="mt-10 mb-1"
                                >
                                    Client Id
                                </label>
                                <input
                                    type="number"
                                    className="form-control border border-success"
                                    name="id"
                                    onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.newClient.id}
                                    placeholder="Enter your Id"
                                    required
                                />

                                <label htmlFor="client-name" className="my-1">
                                    Client Name
                                </label>
                                <input
                                    type="text"
                                    id="client-name"
                                    className="form-control border border-success"
                                    name="name"
                                    onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.newClient.name}
                                    placeholder="Enter your name"
                                    required
                                />

                                <label
                                    htmlFor="client-address"
                                    className="my-1"
                                >
                                    Client Address
                                </label>
                                <input
                                    type="text"
                                    id="client-address"
                                    className="form-control border border-success"
                                    name="address"
                                    onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.newClient.address}
                                    placeholder="Enter your address"
                                    required
                                />

                                <label htmlFor="client-status" className="my-1">
                                    Client Status
                                </label>
                                <input
                                    type="text"
                                    id="client-status"
                                    className="form-control border border-success"
                                    name="status"
                                    onChange={(e) => this.handleInputChange(e)}
                                    value={this.state.newClient.status}
                                    placeholder="Eg. active or disabled"
                                    required
                                />

                                <button className="btn btn-success my-3" type="submit">
                                    Add Client
                                </button>
                            </div>
                        </form>

                        {/* Error message section */}
                        {this.state.showErrorMessage ? (
                            <div className="alert alert-warning">Please check the inputs and try again!</div>
                        ): null}

                        {/* Success message section */}
                        {
                            this.state.showSuccessMessage ? (
                                <div className="alert alert-success">Client added Successfully!</div>
                            ): null
                        }
                        
                    </div>

                    <div className="col-md-8 py-2 px-5">
                        {this.state.showDeleteSection ? (
                            <div>
                                <h5 className="text-danger">
                                    Are you sure you want to delete this client?
                                </h5>
                                <button
                                    className="btn btn-info m-3"
                                    onClick={() => this.handleDeleteYes()}
                                >
                                    Yes
                                </button>
                                <button
                                    className="btn btn-info m-3"
                                    onClick={() => this.handleDeleteNo()}
                                >
                                    No
                                </button>
                            </div>
                        ) : null}
                        <table border="1" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Select</th>
                                    <th>Delete</th>
                                </tr>
                                {this.state.clients.map((client, idx) => (
                                    <tr key={idx}>
                                        <td>{client.id}</td>
                                        <td>{client.name}</td>
                                        <td>{client.address}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    this.handleSelect(
                                                        client.status
                                                    )
                                                }
                                            >
                                                Select
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.handleDelete(idx)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Classexercise;
