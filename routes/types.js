const {findit} = require('../services');
const db = new findit();

const typeRouters = {}

typeRouters.create = (req, res)=>{
    const body = req.body;
    db.create('users',body)
    .then(res.json({'msg': 'Successful'}))
    .catch(err=>{
        console.log(err)
        res.json({'error': err})
    })
}


typeRouters.read = (req, res)=>{
    const body = req.body
    db.read('users', body)
    .then(res.json({'msg': 'Successful'}))
    .catch((error)=>{
        console.log(error)
        res.json({'error': err})
    })
}



module.exports = {typeRouters}