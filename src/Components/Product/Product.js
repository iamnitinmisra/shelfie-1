import React from 'react'



function Product(props){
    let {id, img_url, name, price} = props.product

           
        
       


    return ( 
        <div className = 'product-list'  >
            <div className= 'product-box' key= {id}>
                <img className='product-image' alt={name} src={img_url}/>
                <h2 id='product-name'>{name}</h2>
                <h2 id='product-price'>{price}</h2>             
                <div className = 'product-buttons'>
                <button onClick={()=>props.deleteProduct(id)}>Delete</button>
                <button onClick={()=>props.editProduct(id)}>Edit</button>
                </div>
            </div>
        </div>        
           
        
    )
    
}

export default Product



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