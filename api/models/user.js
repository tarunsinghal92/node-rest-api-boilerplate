'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')


const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		unique: true,
		type: String,
		lowercase: true,
		required: true,
		trim: true
	},
	password: {
		type: String
	},
	createdTime: {
		type: Date
	},
	updatedTime: {
		type: Date
	},
	__v: {
		type: Number,
		select: false
	}
})

userSchema.pre('save', function(next) {
	const user = this;
	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err)

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err)
			user.password = hash
			var now = new Date();
			user.updatedTime = now;
			if (!user.createdTime) {
				user.createdTime = now;
			}
			next()
		})
	})
})

userSchema.methods.validPassword = function(candidatePassword, callback) {
	return bcrypt.compare(candidatePassword, this.password, function(err, result) {
		if (err) return callback(err)
		callback(null, result)
	})
}

const ModelUser = mongoose.model('user', userSchema)

module.exports = ModelUser
