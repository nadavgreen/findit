const {getApp} = require('./app.js')

getApp().listen(process.env.PORT || 3001, () => {
		if(process.env.PORT) console.log(`listening on port ${process.env.PORT}`)
		else console.log(`listening on port ${3001}`)
})

