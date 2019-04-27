const {findit} = require('../services')
const db = new findit()


const usersRouters = {}

usersRouters.create = (req, res)=>{
    const body = req.body;
    db.create('users',body)
    .then(res.json({'msg': 'Successful'}))
    .catch(err=>{
        console.log(err)
        res.json({'error': 'error'})
    })
}


usersRouters.read = (req, res) => {
    const params = req.params;
    db.read('users', params)
    .then(data => res.json({'msg': data}))
    .catch((error)=>{
        console.log(error)
        res.json({'error': 'error'})
    })
}

module.exports = {usersRouters}
