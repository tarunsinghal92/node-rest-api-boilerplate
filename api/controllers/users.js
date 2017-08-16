'use strict'
const User = require('../models/user')

class Users {

	/**
	 * @api {get} api/v1/users/:id Get user detail
	 * @apiName GetUser
	 * @apiDescription Retrieve detail for a specific user.
	 * @apiGroup Users
	 * @apiVersion 1.0.0
	 * @apiHeader {String} x-key User unique id.
	 * @apiHeader {String} x-access-token User access token.
	 *
	 * @apiSuccess {String} _id Unique user id
	 * @apiSuccess {String} name Unique user name
	 * @apiSuccess {String} role User role (student or admin)
	 * @apiSuccess {Object} color Buddy color
	 * @apiSuccess {String} color.stroke Buddy strike color
	 * @apiSuccess {String} color.fill Buddy fill color
	 * @apiSuccess {String[]} favorites Ids list of activities in the favorite view
	 * @apiSuccess {String} language Language setting of the user
	 * @apiSuccess {String} password password of the user
	 * @apiSuccess {String} private_journal Id of the private journal on the server
	 * @apiSuccess {String} shared_journal Id of the shared journal on the server (the same for all users)
	 * @apiSuccess {Number} timestamp when the user was created on the server
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "name": "Tarun",
	 *       "role": "student",
	 *       "color": {
	 *         "stroke": "#00A0FF",
	 *         "fill": "#00B20D"
	 *       },
	 *       "favorites": [
	 *          "org.olpcfrance.Abecedarium",
	 *          "org.sugarlabs.ChatPrototype",
	 *          "org.sugarlabs.Clock",
	 *          "org.olpcfrance.FoodChain",
	 *          "org.sugarlabs.GearsActivity",
	 *          "org.sugarlabs.GTDActivity",
	 *          "org.olpcfrance.Gridpaint",
	 *          "org.olpc-france.LOLActivity",
	 *          "org.sugarlabs.Markdown",
	 *          "org.sugarlabs.MazeWebActivity",
	 *          "org.sugarlabs.PaintActivity"
	 *       ],
	 *       "language": "en",
	 *       "password": "xxx",
	 *       "private_journal": "5569f4b019e0b4c9525b3c96",
	 *       "shared_journal": "536d30874326e55f2a22816f",
	 *       "timestamp": 1423341000747,
	 *       "_id": "5569f4b019e0b4c9525b3c97"
	 *    }
	 **/
	getUsers(req, res) {

		//define query params @TODO
		const options = {}

		//get users data
		User.find(options).sort({
			updatedTime: 'desc'
		}).exec((err, users) => {
			if (err) return res.status(500).send(err)
			res.json(users);
		})
	}

	getUserById(req, res) {

		//get users data
		User.find({
			_id: req.params.uid
		}, (err, user) => {
			if (err) return res.status(500).send(err)
			res.json(user);
		})
	}

	updateUser(req, res) {

		//get users data
		User.findOneAndUpdate({
			_id: req.params.uid
		}, {
			$set: req.body
		}, {
			new: true
		}, (err, user) => {
			if (err) return res.status(500).send(err)
			res.json(user);
		})
	}

	deleteUser(req, res) {

		//get users data
		User.remove({
			_id: req.params.uid
		}, (err, user) => {
			if (err) return res.status(500).send(err)
			res.json({
				message: req.params.uid
			});
		})
	}
}

module.exports = Users
