const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    outofStock: {
        type: Boolean
    },
    img: {
        type: String
    }

}, { timestamps: true })//automatically manages when document is created or updated

const product = mongoose.model("Product", productSchema)
module.exports = product