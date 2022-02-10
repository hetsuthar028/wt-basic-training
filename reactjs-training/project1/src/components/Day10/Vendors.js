import React, { Component } from "react";
import axios from "axios";

const formInitials = {
    id: "",
    vendorName: "",
    contact: "",
    type: false,
};

class Vendors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vendors: [],
            currentVendor: {
                ...formInitials,
            },
        };
    }

    componentDidMount() {
        this.getVendorsData();
    }

    getVendorsData = () => {
        axios
            .get("http://localhost:4100/vendor")
            .then((response) => {
                this.setState({ vendors: response.data });
            })
            .catch((err) => {
                console.log("Error fetching the vendor:", err.message);
            });
    };

    handleInputChange = (e) => {
        let { name, value, checked } = e.target;
        let { currentVendor } = this.state;
        if (name === "type") {
            value = checked;
            return this.setState({
                currentVendor: { ...currentVendor, type: !currentVendor.type },
            });
        }

        this.setState({ currentVendor: { ...currentVendor, [name]: value } });
    };

    updateVendorAPI = () => {
        // Update the vendor
        let { currentVendor } = this.state;
        axios
            .put(
                "http://localhost:4100/vendor/" + currentVendor.id,
                currentVendor
            )
            .then((response) => {
                this.getVendorsData();
                this.setState({currentVendor: {...formInitials}});
            })
            .catch((err) => {
                console.log("Error updating the vendor:", err.name);
            });
    };

    addVendorAPI = () => {
        axios
            .post("http://localhost:4100/vendor", this.state.currentVendor)
            .then((response) => {
                if (response.status == 201) {
                    this.getVendorsData();
                    this.setState({currentVendor: {...formInitials}});
                }
            })
            .catch((err) => {
                console.log("Error adding new vendor:", err.message);
            });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        axios
            .get("http://localhost:4100/vendor/" + this.state.currentVendor.id)
            .then((response) => {
                if (response.data.length != 0) {
                    this.updateVendorAPI();
                }
            })
            .catch((err) => {
                this.addVendorAPI();
                console.log("Error in fetching existing:", err.message);
            });
        
        // return 
    };

    handleDelete = (id) => {
        let shouldDelete = window.confirm(
            "Are you sure you want to delete this vendor?"
        );
        if (shouldDelete) {
            axios
                .delete("http://localhost:4100/vendor/" + id)
                .then((response) => {
                    this.getVendorsData();
                })
                .catch((err) => {
                    console.log("Error deleting the vendor:", err.message);
                });
        }
    };

    handleUpdate = (vendor) => {
        this.setState({ currentVendor: { ...vendor } });
    };

    handleReset = (e) => {
        e.preventDefault();
        this.setState({ currentVendor: { ...formInitials } });
    };

    render() {
        let { vendors, currentVendor } = this.state;
        return (
            <div>
                <div className="row my-2">
                    <div className="col-md-6 m-auto">
                        <h3>Vendors Details</h3>
                    </div>
                </div>
                <div className="row px-3 my-2">
                    <div className="col-md-4">
                        <div className="card p-2 border-success">
                            <form
                                className="my-2"
                                method="POST"
                                onSubmit={this.handleFormSubmit}
                            >
                                <div className="form-group my-2">
                                    <label htmlFor="vendorId">Vendor Id:</label>
                                    <input
                                        type="number"
                                        placeholder="Please enter vendor id"
                                        className="form-control"
                                        value={currentVendor.id}
                                        name="id"
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="vendorName">
                                        Vendor Name:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Please enter vendor name"
                                        className="form-control"
                                        name="vendorName"
                                        onChange={this.handleInputChange}
                                        value={currentVendor.vendorName}
                                        required
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="contact">
                                        Contact Number:
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Please enter contact number"
                                        className="form-control"
                                        name="contact"
                                        onChange={this.handleInputChange}
                                        value={currentVendor.contact}
                                        required
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="employeeCity">Type:</label>
                                    <input
                                        type="checkbox"
                                        className="mx-2"
                                        name="type"
                                        onChange={this.handleInputChange}
                                        checked={currentVendor.type}
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <button
                                        className="btn btn-primary mt-2"
                                        type="submit"
                                    >
                                        Add Vendor
                                    </button>
                                    <button
                                        className="btn btn-warning mt-2 mx-2"
                                        onClick={this.handleReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <table className="table table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Type</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vendors.map((vendor, idx) => (
                                    <tr key={idx}>
                                        <td>{vendor.id}</td>
                                        <td>{vendor.vendorName}</td>
                                        <td>{vendor.contact}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={vendor.type}
                                                onChange={() => false}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    this.handleUpdate(vendor)
                                                }
                                            >
                                                Update
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.handleDelete(vendor.id)
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

export default Vendors;
