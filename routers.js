const {usersRouters} = require('./routes/users')
const express = require('express')

const routers = {}

routers.users = () => {
	const router = express.Router()
	router.post('/create', usersRouters.create)
	router.get('/read/:id', usersRouters.read)
	return router
}

module.exports = {routers}
