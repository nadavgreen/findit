const {usersRouters} = require('./routes/users')
const {colourRouters} = require('./routes/colour')
const {itemsRouters} = require('./routes/items')
const {typeRouters} = require('./routes/type')
const express = require('express')

const routers = {}

routers.users = () => {
	const router = express.Router()
	router.post('/create', usersRouters.create)
	router.get('/read', usersRouters.read)
	return router
}

routers.colour = () => {
	const router = express.Router()
	router.get('/read', colourRouters.read)
	return router
}

routers.type = () => {
	const router = express.Router()
	router.get('/read', typeRouters.read)
	return router
}

routers.items = () => {
	const router = express.Router()
	router.post('/create', itemsRouters.create)
	router.get('/read', itemsRouters.read)
	router.get('/readall', itemsRouters.readAll)
	return router
}

module.exports = {routers}
