import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
import "./reset.css";
import "./App.css";
import "./styles/styles.css";

import Dashboard from "./Components/Dahboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentProduct: {},
    };
  }

  componentDidMount = () => {
    this.getAllProducts();
  };

  getAllProducts = () => {
    axios
      .get("api/inventory")
      .then((res) => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  deleteProduct = (id) => {
    axios
      .delete(`api/inventory/${id}`)
      .then(() => {
        this.getAllProducts()
      })
      .catch((err) => console.log(err));
  };

  editCurrentProduct = (product) => {
    this.setState({
      currentProduct: product,
    });
  };

  render() {
    return (
      <div >
        <Header />
        <div className="components-container">
          <Dashboard
            inventory={this.state.inventory}
            deleteProduct={this.deleteProduct}
            getAllProducts={this.getAllProducts}
            editCurrentProduct={this.editCurrentProduct}
          />
          <Form
            currentProduct={this.state.currentProduct}
            getAllProducts={this.getAllProducts}
            editCurrentProduct={this.editCurrentProduct}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);


