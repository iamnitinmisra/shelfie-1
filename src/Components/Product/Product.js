import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../styles/styles.css";

function Product(props) {
  let { id, img_url, name, price } = props.product;

  return (
    <div className="product-list">
      {console.log(props)}
      <img className="product-image" alt={name} src={img_url} />
      <div className="product-text">
        <div>
          <h2 id="product-name">{name}</h2>
          <h2 id="product-price">{price}</h2>
        </div>
        <div className="product-button-container">
          <input
            className="product-button"
            type="button"
            value="Delete"
            onClick={() => props.deleteProduct(id)}
          />
          <Link to={`/edit/${id}`} >
            {/* <button className="product-button"><Link to={`/edit/${id}`}>Edit</Link></button> */}
            <input
              className="product-button"
              type="button"
              value="Edit"
              // onClick={() => props.editProduct(id)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Product);

//*IF I NEED TO MAP INVENTORY WHICH ORIGINALLY COMES FROM APP, THROUGH DASHBOARD BUT I ALREADY DID IT IN DASHBOARD SO NO NEED

// function Product(props){
//     let product = props.inventory.map((product)=>{
//         return(
//         <div className = 'product-box' key= {product.id}>
//                 <img className='product-image' alt={product.name} src={product.img_url}  />
//                 <h2>{product.name}</h2>
//                 <h2>{product.price}</h2>
//             <div className = 'product-buttons'>
//                 <button>Delete</button>
//                 <button>Edit</button>
//             </div>
//         </div>
//         )

//     })

//     return (
//         <div className = 'product-box'>
//             {product}
//         </div>

//     )

// }
