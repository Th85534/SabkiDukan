const port = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const User=require('./db/user');
const Product=require(`./db/product`);
const { log } = require('console');
mongoose.connect("mongodb+srv://Soumasish:Souma1201@cluster0.hmzafzp.mongodb.net/sabkidukan?retryWrites=true&w=majority")


app.use(express.json());
app.use(cors());



app.get("/",(req,res)=>{
    res.send("App is running.....")
})

//Image storage

const storage = multer.diskStorage({
    destination: `./upload/images`,
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

//creation of upload
app.use(`/images`,express.static(`upload/images`))
app.post("/upload",upload.single(`product`),(req,res)=>{
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//text post

app.post('/register',async(req,res)=>{
    let user= new User(req.body)
    let result=await user.save()
    res.send(result)
})

//product post

app.post(`/addproduct`,async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name:  req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,

    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

//api for deletion of prod

app.post(`/removeproduct`,async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name: req.body.name
    })
})

//api for getting all prod
app.get(`/allproducts`,async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on Port "+port)
    }else{
        console.log("Error while starting"+error)
    }
})
