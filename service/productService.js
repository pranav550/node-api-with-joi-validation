const Product = require('../database/models/productModel');

module.exports.createProduct = async (serviceData)=>{
    try{
        let product = new Product({...serviceData})
        let result =  await product.save()
        return result.toObject();
    }
    catch(error){
      console.log('Something Went Wrong: Service: createProduct', error)
      throw new Error(error)
    }
   
   
}