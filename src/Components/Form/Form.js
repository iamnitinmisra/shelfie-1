import React, {Component} from 'react'
import axios from 'axios'


class Form extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            price:0,
            imageUrl:''

        }
    }

    addToInventory(){
        const {name, price, imageUrl} = this.state
        axios.post('api/product', {name, price, imageUrl})
        .then(res=> {
          this.setState({
            inventory: res.data
          })      
        }).catch(err=> console.log(err))
    }

    clearTheForm(){
        this.setState ={
            name:'',
            price:0,
            imageUrl:''
        }

    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })

    }
    handlePriceChange(e){
        this.setState = ({
            price: e.target.value
        })
    }    
    handleImageUrlChange(e){
        this.setState = ({
            imgUrl: e.target.value
        })

    }
   
    
    render(){
        return (
        <div>
            <p>Form.js</p>
            <input placeholder = 'Product Name' onChange = {(e)=> this.handleNameChange(e)}/>
            <input placeholder = '$$ Price $$' onChange = {(e)=> this.handlePriceChange(e)}/>
            <input placeholder = 'image URL: http://... 'onChange = {(e)=> this.handleImageUrlChange(e)}/>
            <button onClick={()=> this.addToInventory()}>Add to Inventory</button>
            <button onClick={()=>this.clearTheForm()}>Cancel</button>
        </div>
        )
    }
}

export default Form
