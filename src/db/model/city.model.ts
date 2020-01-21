import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    activeStatus: {
        type: Boolean,
        default: true
    }
});

export const cityModel = mongoose.model('City', citySchema)
