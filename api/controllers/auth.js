'use strict'
const User = require('../models/user')
const encodeToken = require('../utils/token')

class Auth {
	signUp(req, res) {
		const {
			firstName,
			lastName,
			email,
			password
		} = req.body

		if (!email || !password) {
			return res.status(401).send({
				error: 'You must provide email and password!'
			})
		}

		User.findOne({
			email
		}, (err, user) => {
			if (err) return res.status(500).send(err)
			if (user) return res.status(401).send({
				error: 'This email id is already in use!'
			})

			const newUser = new User({
				firstName,
				lastName,
				email,
				password
			})
			newUser.save((err, userSaved) => {
				if (err) return res.send(err)
				res.send({
					token: encodeToken(userSaved),
					user: userSaved
				})
			})
		})
	}

	signIn(req, res) {
		res.send({
			token: encodeToken(req.user)
		})
	}
}

module.exports = Auth
