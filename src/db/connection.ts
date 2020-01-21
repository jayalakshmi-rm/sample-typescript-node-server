import {Mongoose} from 'mongoose';

export class MongoConnectionClass {

    private mongoose: Mongoose;
    constructor() {
        this.mongoose = new Mongoose();
    }

    connection() {
        // mongodb://shopper:shopper@localhost:27017/shoppingSiteDB
        this.mongoose.connect('mongodb://localhost:27017/shoppingSiteDB', (err: any) => {
            if(err) {
                console.log('error in DB connection', err);
            } else {
                console.log('connected to DB');
            }    
        });
    }

}
