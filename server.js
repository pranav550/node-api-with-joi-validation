const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require('./database/connection');


dotenv.config()

const app = express()

// db connect
dbConnection()

//configure the cors
app.use(cors())

// request payload middleware
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use('/api/v1/product', require('./Routes/productRoutes'))

app.get('/',   (req, res, next)=>{
    res.send('Hellocccccc')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server listenn on PORT ${PORT}`);
})

app.use(function(err, req, res, next){
    console.log(err.stack)
    res.status(500).send({
        status:500,
        message:err.messsage,
        body:{}
    })

})