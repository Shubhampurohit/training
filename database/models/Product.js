const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  price: { type: Number },
  image: { type: Object },
  variant: { type: Object },
  brand: { type: String },
  sku: { type: String },
  keyword: { type: String },
  status: { type: String, enum: ["active", "inactive", "deleted"] },
  created_at: { type: Date },
  created_by: { type: Object },
});

const ProductModel = new model("products", productSchema);

module.exports = ProductModel;
