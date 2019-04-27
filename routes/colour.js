const {findit} = require('../services');
const db = new findit();


const colourRouters = {}


colourRouters.read = (req, res) =>{

    db.readAll('colour')
    .then(data => res.json({'msg': data}))
    .catch(err =>{
        console.log(err)
        res.json({'error': 'error'})
    })
}

module.exports = {colourRouters}
