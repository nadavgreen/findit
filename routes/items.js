const {findit} = require('../services');
const db = new findit();

const itemsRouters = {}


itemsRouters.create = (req, res)=>{
    const body = req.body;
    db.create('items', body)
    .then(res.json({'msg': 'created items'}))
    .catch(err=>{
        console.log(err)
        res.json({'err': 'error'})
    })

}

itemsRouters.read = (req, res) =>{
    const params = req.params;
    console.log(params)
    db.readMultiple('items', params)
    .then(data=> res.json({'msg': data}))
    .catch(error=>{
        res.json({'err': 'error'})
    })
}

itemsRouters.put = (req, res) =>{
    const body = req.body;
    const {id} = req.body;
    db.update('items', body, id)
    .then(res.json({'msg': 'created'}))
    .catch(err=>{
        console.log(err)
        res.json({'error': 'err'})
    })
}


module.exports = {itemsRouters}
