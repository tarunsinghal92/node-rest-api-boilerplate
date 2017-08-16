'use strict'

const express = require('express')
const AuthController = require('./controllers/auth')
const UsersController = require('./controllers/users')
const {
  requireAuth,
  requireSignIn
} = require('./utils/authorization')
const auth = new AuthController()
const users = new UsersController()

module.exports = function(app) {

  app.get('/', (req, res) => res.redirect('/docs'))
  app.get('/me', requireAuth, (req, res) => res.json(req.user))

  // auth routes
  app.post('/api/auth/signup', auth.signUp)
  app.post('/api/auth/signin', requireSignIn, auth.signIn)

  // users routes
  app.get('/api/v1/users', requireAuth, users.getUsers)
  app.get('/api/v1/users/:uid', requireAuth, users.getUserById)
  app.put('/api/v1/users/:uid', requireAuth, users.updateUser)
  app.delete('/api/v1/users/:uid', requireAuth, users.deleteUser)

  // Make the docs folder available to the world
  app.use('/docs', express.static(__dirname + '/../docs/www'));

  // If no route is matched by now, it must be a 404
  app.use((req, res) => {
    res.status(404).json({
      "message": "Route Not Found!",
      "url": req.protocol + '://' + req.get('host') + req.originalUrl
    });
  });
}
