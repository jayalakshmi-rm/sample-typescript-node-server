import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
let productSchema = new Schema({
    productId: {
        type: String,
        required: true
    }
});

export function productModel() { return mongoose.model('product', productSchema); }