const  mongoose = require('mongoose')


const PaymentDetailSchema = new mongoose.Schema({
    paymentId:String,
    amount:Number,
    currency:String,
    status:String,
    method:String,
    receipt_email:String,
    description:String,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //Reference to your user mode if u have one.
    created:{
        type:Date,
        default: Date.now
    }
});

const PaymentDetail = mongoose.model('PaymentDetails', PaymentDetailSchema)
module.exports = PaymentDetail
