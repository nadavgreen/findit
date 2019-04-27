const {findit} = require('../services')
const db = new findit()


const usersRouters = {}

usersRouters.create = (req, res)=>{
    const body = req.body;
    db.create('users',body)
    .then(res.json({'msg': 'Successful'}))
    .catch(err=>{
        console.log(err)
        res.json({'error': err})
    })
}


usersRouters.read = (req, res)=>{
    const body = req.body
    db.read('users', body)
    .then(res.json({'msg': 'Successful'}))
    .catch((error)=>{
        console.log(error)
        res.json({'error': 'error'})
    })
}

module.exports = {usersRouters}
