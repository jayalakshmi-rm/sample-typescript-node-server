import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId; 

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: ObjectId,
        required: true,
        ref: 'City'
    }
});
console.log('userSchema', userSchema);
export const userModel = mongoose.model('User', userSchema);
