const {findit} = require('../services');
const db = new findit();

const itemsRouters = {}


itemsRouters.create = (req, res)=>{
    const body = req.body;
    db.create('itemss', body)
    .then(res.json({'msg': 'created items'}))
    .catch(err=>{
        console.log(err)
        res.json({'err': 'error'})
    })

}

itemsRouters.read = (req, res) =>{
    const body = req.body;
    
    db.readMultiple('itemss', body)
    .then(data=> res.json({'msg': data}))
    .catch(error=>{
        console.log(error)
        res.json({'err': 'error'})
    })
}

itemsRouters.put = (req, res) =>{
    const body = req.body;
    const {id} = req.body;
    db.update('itemss', body, id)
    .then(res.json({'msg': 'created'}))
    .catch(err=>{
        console.log(err)
        res.json({'error': 'err'})
    })
}


module.exports = {itemsRouters}
