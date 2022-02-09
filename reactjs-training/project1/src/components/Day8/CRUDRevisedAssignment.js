import React, { Component } from "react";

const formInitials = {
    productCode: 1,
    productName: '',
    category: 0,
    status: false,
    store: -1
}

const categoryMapping = {
    0: 'Select Category',
    1: 'Electronics',
    2: 'Electrical'
}

const storeMapping = {
    0: 'Showroom',
    1: 'Store 1'
}

class Crudrevisedassignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            newProduct: {
                ...formInitials
            },
            showWarning: false,
            warningMessage: '',
        };
    }

    handleChange = (e) => {
        let {name, value, checked, selectedIndex} = e.target;
        let { status } = this.state.newProduct;
        
        if(name === 'status'){
            value = checked
            this.setState({newProduct: {...this.state.newProduct, status: !status}})
        }
        this.setState({newProduct: {...this.state.newProduct, [name]: value}});
        // console.log("Name:", name, "Value:", value, "Checked:", checked, "Selected Index:", selectedIndex);
    }

    handleEdit = (product, idx) => {
        let newProduct = {...product};
        this.setState({newProduct});
    }

    handleDelete = (idx) => {
        let answer = window.confirm('Are you sure you want to delete this product?');
        let { products } = this.state;

        if(answer === true){
            products.splice(idx, 1);
        }
        this.setState({products});
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({newProduct: {...formInitials}});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {products, newProduct} = this.state;

        if(newProduct.productName.toString().trim() === ''){
            this.setState({showWarning: true, warningMessage: 'Invalid Product Name!'});
            
            setTimeout(() => {
                this.setState({showWarning: false, warningMessage: ''});
            }, 3500);
            return;
        }

        if (newProduct.category == 0){
            this.setState({showWarning: true, warningMessage: 'Please select a category!'});
            
            setTimeout(() => {
                this.setState({showWarning: false, warningMessage: ''});
            }, 3500);
            return;
        }

        if(newProduct.store === -1){
            this.setState({showWarning: true, warningMessage: 'Please select a store!'});
            
            setTimeout(() => {
                this.setState({showWarning: false, warningMessage: ''});
            }, 3500);
            return;
        }

        let findExistingProduct = products.findIndex((product) => product.productCode == newProduct.productCode);
        
        if(findExistingProduct !== -1){
            products[findExistingProduct] = {
                ...newProduct
            }
        } else {
            formInitials.productCode +=1
            products.push(newProduct);
        }

        this.setState({products, newProduct: {...formInitials}});
    }

    render() {

        let { products, newProduct, showWarning, warningMessage } = this.state;

        return (
            <div>
                <div className="row p-3">
                    <div className="col-md-4 m-auto my-2">
                        <h3>Product Form</h3>
                        <div className="card shadow-lg p-2 my-3 rounded">
                            <form method="POST" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="productCode">
                                        Product Code:
                                    </label>
                                    <input
                                        className="form-control my-2 border-success"
                                        type="number"
                                        placeholder="Please enter product code"
                                        name="productCode"
                                        value={newProduct.productCode}
                                        onChange={() => false}
                                        readOnly
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="productName">
                                        Product Name:
                                    </label>
                                    <input
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="Please enter product name"
                                        name="productName"
                                        value={newProduct.productName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Category:</label>
                                    <select className="form-select my-2" onChange={this.handleChange} name="category" value={newProduct.category}>
                                        <option value={0}>Select Category</option>
                                        <option value={1}>Electronics</option>
                                        <option value={2}>Electrical</option>
                                    </select>
                                </div>

                                <div className="form-check">
                                    <label htmlFor="status">Status:</label>
                                    <input
                                        className="mx-2"
                                        type="checkbox"
                                        name="status"
                                        onChange={this.handleChange}
                                        checked={newProduct.status}
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <div className="row">
                                        <div className="col-md-4">Store:</div>
                                        <div className="col-md-8 text-start">
                                            <input
                                                className="form-check-input mx-1"
                                                type="radio"
                                                name="store"
                                                id="showRoom"
                                                value={0}
                                                checked={newProduct.store == 0}
                                                onChange={this.handleChange}
                                            />
                                            <label
                                                className="form-check-label mx-2"
                                                htmlFor="showRoom"
                                            >
                                                Showroom
                                            </label>
                                            <br />
                                            <input
                                                className="form-check-input mx-1"
                                                type="radio"
                                                name="store"
                                                id="store1"
                                                checked={newProduct.store == 1}
                                                value={1}
                                                onChange={this.handleChange}
                                            />
                                            <label
                                                className="form-check-label mx-2"
                                                htmlFor="store1"
                                            >
                                                Store 1
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <button className="btn btn-primary mx-2">
                                        Add Product
                                    </button>
                                    <button className="btn btn-warning mx-2" onClick={this.handleReset}>
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                        {showWarning && (
                            <div className="alert alert-warning">
                                {warningMessage}
                            </div>
                        )}
                        
                    </div>
                    <div className="col-md-8 m-auto my-2">
                        <h3>Product Details</h3>
                        <table className="my-3 table table-striped">
                            <tbody>
                                <tr className="table-dark">
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Store</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {products.map((product, idx) => (
                                    <tr key={idx}>
                                        <td>{product.productCode}</td>
                                        <td>{product.productName}</td>
                                        <td>{categoryMapping[product.category]}</td>
                                        <td><input type="checkbox" checked={product.status} onChange={() => false} /></td>
                                        <td>{storeMapping[product.store]}</td>
                                        <td><button className="btn btn-primary" onClick={() => this.handleEdit(product, idx)}>Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.handleDelete(idx)}>Delete</button></td>
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

export default Crudrevisedassignment;
