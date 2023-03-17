const db = require("../config/mongodb");
const ObjectId = require("mongodb").ObjectId;


//GET all data products
const getProducts = (req, res) => {
  db.collection('products').find()
  .toArray()
  .then(result => res.send(result))
  .catch(error => res.send(error))
};

//GET data by id
const getProductById = (req, res) => {
  const {id} = req.params;
  db.collection('products').find({_id: new ObjectId(id)})
  .toArray()
  .then(result => res.send(result))
  .catch(error => res.send(error))
};

//INSERT data
const saveProduct = (req, res) => {
  const {name, price, stock, status} = req.body;
  db.collection('products').insertOne({name, price, stock, status})
  .then(result => res.send(result))
  .catch(error => res.send(error))
};
//UPDATE data
const updateProduct = (req, res) => {
  const {id} = req.params;
  db.collection('products').updateOne({_id: new ObjectId(id)}, {$set: {name: req.body.name, price:req.body.price, stock:req.body.stock, status:req.body.status}})
  .then(result => res.send(result))
  .catch(error => res.send(error))
};

//DELETE data
const deleteProduct = (req, res) => {
  const {id} = req.params;
  db.collection('products').deleteOne({_id: new ObjectId(id)})

  .then(result => res.send(result))
  .catch(error => res.send(error))
};


module.exports = {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
}