const {routers} = require('./routers')

const getApp = () => {
	const app = require('express')();
	app.use(require('body-parser').json())
	app.use((req, res, next)=>{
		res.header("Access-Control-Allow-Origin" , "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	    	res.header("Access-Control-Allow-Methods", "PUT, DELETE")
		next()
	});

	app.use('/users', routers.users())
	app.use('/colour', routers.colour())
	app.use('/items', routers.items())
	app.use('/type', routers.type())

    	return app;
}

module.exports = {
    getApp,
}
