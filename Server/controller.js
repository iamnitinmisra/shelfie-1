module.exports = {
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_products()
        .then(products=> {
            res.status(200).send(products)
        })
        .catch(err=> {  
            console.log(err)         
            res.status(400).send('Something went wrong!!!')
            
        })       
    },
    getOneProduct: (req,res ) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.get_one_product(id)
        .then(product=> {
            res.status(200).send(product)
        })
        .catch(err=> { 
            console.log(err)
            res.status(400).send('Something went wrong!')
           
        })
    },
    addProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, img_url, price} = req.body
        console.log(req.body)

        dbInstance.add_product([name, img_url, price])
        .then(product=> {
            res.status(200).send(product) 
        })
        .catch(err=> { 
            console.log(err)
            res.status(400).send('Something went wrong!')
           
        })
    },
    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        const {name, image_url, price} = req.body
        dbInstance.update_product([id, name, image_url, price])
        .then(product=> {
            res.status(200).send(product)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).send('Something went wrong!')            
        })

    },
    deleteProduct: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_product(id)
        .then(()=> res.sendStatus(200))
        .catch(err=>{
            console.log(err)
            res.status(400).send('Something went wrong!')
        })
    }
}