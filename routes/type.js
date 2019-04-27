const {findit} = require('../services');
const db = new findit();

const typeRouters = {}



typeRouters.read = (req, res)=>{

    db.readAll('type')
    .then(data => res.json({'msg': data}))
    .catch((error)=>{
        console.log(error)
        res.json({'error': err})
    })
}



module.exports = {typeRouters}