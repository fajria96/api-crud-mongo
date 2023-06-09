const Product = require("../models/ProductModel.js");

//GET all datas
 const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET data by id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//POST or insert data
const saveProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const insertedproduct = await product.save();
    res.status(201).json(insertedproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//PATCH or update data
const updateProduct = async (req, res) => {
    try {
      const updatedproduct = await Product.updateOne({_id:req.params.id}, {$set: req.body});
      res.status(200).json(updatedproduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //DELETE data
  const deleteProduct = async (req, res) => {
    try {
      const deleteduser = await Product.deleteOne({_id:req.params.id});
      res.status(200).json(deleteduser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
 
  //GET data by key and filter 
  const filterList = async (req,resp)=> {
    let data = await Product.find(
      {
        "$or":[
            {name:{$regex:req.params.key}}
        ]
    }
    );
    console.log(req.params.key);
    resp.send(data);
  
  }

  module.exports = {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct,
    filterList,
  }