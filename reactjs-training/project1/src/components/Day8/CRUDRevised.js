import React, { Component } from "react";

class Crudrevised extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: "",
            customerName: "",
            customerStatus: false,
            customerType: { local: false, central: false },
            customers: [],
        };
    }

    handleChange = (e) => {
        let {
            customers,
            customerId,
            customerName,
            customerStatus,
            customerType,
        } = this.state;
        let { name, value } = e.target;
        if (name === "customerStatus") {
            value = !customerStatus;
        }
        // if (name === "customerType") {
        //     console.log("CustomerType", customerType);
        //     if (value === "local") {
        //         customerType = {
        //             local: true,
        //             central: false,
        //         };
        //     } else {
        //         customerType = {
        //             local: false,
        //             central: true,
        //         };
        //     }
        //     this.setState({ customerType });
        // }
        // console.log(name, value);
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let {
            customers,
            customerId,
            customerName,
            customerStatus,
            customerType,
        } = this.state;

        let findExistingCustomer = customers.findIndex((customer) => customer.customerId === customerId);
        console.log("Existing Index", findExistingCustomer);
        console.log("Existing Record", customers[findExistingCustomer]);

        if(findExistingCustomer !== -1){
            console.log("Type before update", customerType)
            if(customerType.local === true){
                customerType = "Local"
            } else {
                customerType = "Central"   
            }
            customers[findExistingCustomer] = {
                customerId,
                customerName,
                customerStatus,
                customerType
            }
        } else {
            customers.push({customerId, customerName, customerStatus, customerType});
        }

        // Updating the Customers and resetting the form values
        this.setState({
            customers,
            customerId: "",
            customerName: "",
            customerStatus: false,
            customerType: { local: false, central: false },
        });
    };

    handleEdit = (idx) => {
        let currentCustomer = this.state.customers[idx];
        let { customerId, customerName, customerStatus, customerType } =
            currentCustomer;

        if (customerType === "Local") {
            customerType = {
                local: true,
                central: false,
            };
        } else {
            customerType = {
                local: false,
                central: true,
            };
        }

        this.setState({
            customerId,
            customerName,
            customerStatus,
            customerType,
        });
    };

    handleDelete = (idx) => {
        let { customers } = this.state;
        customers.splice(idx, 1);
        this.setState({ customers });
    };

    render() {
        let {
            customerId,
            customerName,
            customerStatus,
            customerType,
            customers,
        } = this.state;
        return (
            <div>
                <div className="row m-3">
                    <div className="col-md-4">
                        <div className="card p-3">
                            <form method="POST" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="customerId">
                                        Customer Id:
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Please enter customer id"
                                        required
                                        name="customerId"
                                        value={customerId}
                                        onChange={this.handleChange}
                                        className="form-control my-2"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customerName">
                                        Customer Name:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Please enter customer name"
                                        className="form-control my-2"
                                        name="customerName"
                                        value={customerName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customerStatus">
                                        Status:
                                    </label>
                                    <input
                                        type="checkbox"
                                        className="mx-2 my-2"
                                        name="customerStatus"
                                        onChange={this.handleChange}
                                        checked={customerStatus}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="customerType">Type:</label>
                                    <br />
                                    Local:
                                    <input
                                        type="radio"
                                        className="form-radio mx-2"
                                        name="customerType"
                                        value="Local"
                                        onChange={this.handleChange}
                                        checked={customerType.local}
                                    />
                                    Central:
                                    <input
                                        type="radio"
                                        className="form-radio mx-2"
                                        name="customerType"
                                        value="Central"
                                        onChange={this.handleChange}
                                        checked={customerType.central}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary my-3">
                                        Add Client
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Customer Name</th>
                                    <th>Customer Status</th>
                                    <th>Customer Type</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {customers.map((customer, idx) => (
                                    <tr key={idx}>
                                        <td>{customer.customerId}</td>
                                        <td>{customer.customerName}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={
                                                    customer.customerStatus
                                                }
                                                onChange={() => false}
                                            />
                                        </td>
                                        <td>{customer.customerType}</td>
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                    this.handleEdit(idx)
                                                }
                                            >
                                                Edit
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

export default Crudrevised;
