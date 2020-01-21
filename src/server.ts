import express from "express";
import { MongoConnectionClass } from './db';
import { router } from './api/v1/index'

const SMS = require('node-sms-send')
 
const sms = new SMS('username', 'password')

const app = express();
app.set("port", process.env.PORT || 4200);
app.listen(app.get('port'), () => {
    sms.send('+919791138639', 'Hello!')
  .then(body => console.log(body)) // returns { message_id: 'string' }
  .catch(err => console.log(err.message))
 console.log('server listening to', app.get('port'));
});

app.use('/api/v1', router);

const db = new MongoConnectionClass();
db.connection();
