import {Router} from 'express';
import {userModel} from '../../db/model/user.model';
export class User {
    route = Router();
    constructor() {
        this.route.post('/', (req, res)=> {
            console.log('userModel', userModel)
            let newUser: any = new userModel();
            console.log('newUser', newUser);
            newUser.name = req.body['name'];
            newUser.city = req.body['city'];
            newUser.save((err, user) => {
                if(err) {
                    res.send({status: 501, message: 'internal server error'});
                } else {
                    res.send({status: 200, message: 'success', user: user});
                }
            })
        });

        this.route.post('/get', (req, res)=> {
            console.log('req.body', req.body);
            userModel.findOne({name: req.body['name']},(err, user) => {
                if(err) {
                    res.send({status: 501, message: 'internal server error'});
                } else {
                    res.send({status: 200, message: 'success', user: user});
                }
            })
        });
    }
}