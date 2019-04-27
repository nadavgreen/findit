const {findit} = require('../services');
const db = new findit();

const itemRouters = {}


itemRouters.create = (req, res)=>{
    const body = req.body;
    db.create('items', body)
    .then(res.json({'msg': 'created item'}))
    .catch(err=>{
        console.log(err)
        res.json({'err': 'error'})
    })

}

itemRouters.read = (req, res) =>{
    const body = req.body;
    
    db.readMultiple('items', body)
    .then(data=> res.json({'msg': data}))
    .catch(error=>{
        console.log(error)
        res.json({'err': 'error'})
    })
}

itemRouters.put = (req, res) =>{
    const body = req.body;
    const {id} = req.body;
    db.update('items', body, id)
    .then(res.json({'msg': 'created'}))
    .catch(err=>{
        console.log(err)
        res.json({'error': 'err'})
    })
}


module.exports = {itemRouters}
