const {routers} = require('./routers')
const cors = require('cors')

const getApp = () => {
	const app = require('express')();
	app.use(require('body-parser').json())
	app.use(cors())

	app.use('/users', routers.users())
	app.use('/colour', routers.colour())
	app.use('/items', routers.items())
	app.use('/type', routers.type())

    	return app;
}

module.exports = {
    getApp,
}
