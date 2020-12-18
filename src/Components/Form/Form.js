import React, {Component} from 'react'
import axios from 'axios'


class Form extends Component{
    constructor(){
        super()
        this.state = {
            id:null,
            name:'',          
            img_url:'',
            price:0
        }
    }

    // componentDidUpdate(oldProps){
    //     console.log(oldProps)
    //     let {id, name,img_url, price} = this.props.product
    //     if(oldProps.product.id !== id){
    //         this.setState({
    //             id,
    //             name,
    //             img_url,
    //             price,
    //             edit:true
    //         })
    //     }
    // }

    // componentDidUpdate(oldProps){
    //     axios.get('api/inventory')
    //     .then(res => {
    //       this.setState({
    //         name:res.data,          
    //         img_url:res.data,
    //         price:res.data
    //       })
    //     }).catch(err=> console.log(err))
      
    //   }
    // let {id,name, price, img_url} = this.props.inventory
   

    // getOneProduct = () => {  
    //     let {id, name, price, img_url} = this.state    
    //     axios.get(`api/product/:id=${id}`)
    //     then(res=> {
    //         this.setState({        
    //             name: res.data.name,           
    //             img_url: res.data.img_url,
    //             price: res.data.price  
    //         })
    //     }).catch(err=> console.log(err))
    // }
    

  

    addToInventory = () => {
        const {name, price, img_url} = this.state
        // let newProduct = {
        //     name,
        //     price,
        //     img_url
        // }
        axios.post('api/product', {name, price, img_url})
        .then(res=> {            
          this.setState({
            name: res.data.name,           
            img_url: res.data.img_url,
            price: res.data.price                     
          })
          this.props.getAllProducts()
          this.clearTheForm()      
        }).catch(err=> console.log(err))
    }

    
 editProduct=()=>{ 
    const {id, name, price, img_url} = this.state
     axios.put(`api/inventory/:id=${id}`, {name, price, img_url})
    .then(res=> {          
        this.setState({
            name: res.data.name,           
            img_url: res.data.img_url,
            price: res.data.price 
        })
        this.props.getAllProducts()
        this.clearTheForm()         
    }).catch(err=> console.log(err))
  }

   

    


    clearTheForm = () => {
        this.setState({
            id:null,
            name:'',
            price:0,
            img_url:''
        })

    }

    handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value
        })
    }

   
    
    render(){
        const {id, name, img_url, price} = this.state
        const {product} = this.props
        return (
        <div className= 'form-box'>
            <div>
                {img_url 
                ? <img className = 'form-image' alt='form-product-preview' src= {img_url} />
                : <img className = 'form-image' alt='form-product-preview' src= 'https://wantedbazaar.com/wp-content/themes/Wanted-Bazaar/images/nothumb/nothumb370x300.png' />
                }
                
            </div>

                <div className = 'form-inputs'>
                <h2>Image URL: </h2>
                <input  name = 'imageUrl' type = 'text' placeholder = 'http://... 'value = {img_url}
                        onChange = {(e)=> this.handleChange(e)} />    
                <h2>Product Name: </h2>
                <input  name = 'name' type = 'text' placeholder = 'Product Name' value = {name}
                        onChange = {(e)=> this.handleChange(e)} />
                <h2>Price: </h2>
                <input  name = 'price' type = 'text' placeholder = '$$ Price $$' value = {price}
                        onChange = {(e)=> this.handleChange(e)} />                   
                </div>     
                 
            <div className= 'form-buttons'>
                {id
                ? <button onClick={()=>this.editProduct(id)}>Save Changes</button>
                : <button onClick={()=>this.addToInventory()}>Add To Inventory</button>
                }                
                <button onClick={()=>this.clearTheForm()}>Cancel</button>
            </div>
        </div>
        )
    }
}

export default Form

