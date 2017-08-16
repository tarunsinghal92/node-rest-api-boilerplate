'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const {
	PORT,
	URL_DATABASE,
	NODE_ENV,
	DATABASE_PROD: {
		NAME,
		USER,
		PASSWORD
	}
} = require('./config/config')

// db connection
let url = URL_DATABASE
if (NODE_ENV === 'production' && NAME && USER && PASSWORD) {
	url = `mongodb://${USER}:${PASSWORD}@ds133249.mlab.com:33249/${NAME}`
}

mongoose.connect(url)

// app setup
if (process.env.NODE_ENV !== 'test') {
	app.use(morgan('dev'))
}
app.use(cors())
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json({
	type: '*/*'
}))

require('./api/routes')(app)

// server setup
const server = http.createServer(app)
server.listen(PORT)
if (process.env.NODE_ENV !== 'test') console.log(`Server listenning and running in the PORT ${PORT}`)

//export app for testing
module.exports = app
