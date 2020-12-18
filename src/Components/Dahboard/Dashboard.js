import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'


class Dashboard extends Component{
  constructor(){
    super()
  }
    

  deleteProduct = (id) =>{
    const {inventory} = this.props
    axios.delete(`api/inventory/:id=${id}`)
    .then(res=> {
        this.setState({
          inventory: res.data
        })
        this.props.getAllInventory()
    }).catch(err=> console.log(err))

}

    
    



   render(){
     const {inventory, editCurrentProduct, deleteProduct} = this.props
     return(     
          <ul>        
            <li>
               {inventory.map((product)=>            
               <Product key={product.id} product={product} 
                        editProduct={editCurrentProduct} deleteProduct={deleteProduct}/>
               )}
            </li>      
          </ul>
       ) 
  } 

}

export default Dashboard 


