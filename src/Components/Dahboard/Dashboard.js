import React, { Component } from "react";
import Product from "../Product/Product";
// import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { inventory, editCurrentProduct, deleteProduct } = this.props;
    return (
      <ul>
        <li>
          {inventory.map((product) => (
            <Product
              key={product.id}
              product={product}
              editProduct={editCurrentProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </li>
      </ul>
    );
  }
}

export default Dashboard;
