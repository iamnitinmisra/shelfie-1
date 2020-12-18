import React, { Component } from "react";
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

  editCurrentProduct = (product) => {
    this.setState({
      currentProduct: product,
    });
  };

  //  deleteProduct = () =>{
  //     const {id} = this.state.inventory
  //     axios.delete(`api/inventory/?id=${id}`)
  //     .then(res=> {
  //         this.setState({
  //           inventory: res.data
  //         })
  //     }).catch(err=> console.log(err))

  // }

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

export default App;

{
  /* <div> 
        <Header/> 
        <Dashboard editCurrentProduct={this.editCurrentProduct}/>
        <Form  product={this.state.currentProduct} 
               editCurrentProduct={this.editCurrentProduct}/>
      </div> */
}
