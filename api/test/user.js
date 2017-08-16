// define env variable
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var server = require('../../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var faker = require('faker');

//fake user for testing auth
var fakeUser = {
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
}

//init server
chai.use(chaiHttp);

describe('Users', function() {

	//create & login user and store access key
	before((done) => {

		chai.request(server)
			.post('/api/auth/signup')
			.send(fakeUser)
			.end((err, res) => {

				fakeUser = res.body;
				done();
			});
	});

	describe('/GET users', () => {
		it('it should return all the users', (done) => {

			chai.request(server)
				.get('/api/v1/users')
				.set('Authorization', fakeUser.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.above(0);
					done();
				});
		});

		it('it should return all fields for the user', (done) => {

			chai.request(server)
				.get('/api/v1/users')
				.set('Authorization', fakeUser.token)
				.end((err, res) => {
					res.should.have.status(200);
					for (var i = 0; i < res.body.length; i++) {
						res.body[i].should.be.a('object');
						res.body[i].should.have.property('_id').not.eql(undefined);
						res.body[i].should.have.property('firstName').not.eql(undefined);
						res.body[i].should.have.property('lastName').not.eql(undefined);
						res.body[i].should.have.property('email').not.eql(undefined);
						res.body[i].should.have.property('password').not.eql(undefined);
					}
					done();
				});
		});
	});

	describe('/GET/:id users', () => {
		it('it should return the user by id', (done) => {

			chai.request(server)
				.get('/api/v1/users/' + fakeUser.user._id)
				.set('Authorization', fakeUser.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body[0].should.be.a('object');
					res.body[0].should.have.property('_id').not.eql(undefined);
					res.body[0].should.have.property('firstName').not.eql(undefined);
					res.body[0].should.have.property('lastName').not.eql(undefined);
					res.body[0].should.have.property('email').not.eql(undefined);
					res.body[0].should.have.property('password').not.eql(undefined);
					done();
				});
		});
	});

	describe('/PUT/:id users', () => {
		it('it should update the user', (done) => {
			var newFirstName = faker.name.firstName();
			chai.request(server)
				.put('/api/v1/users/' + fakeUser.user._id)
				.set('Authorization', fakeUser.token)
				.send({
					firstName: newFirstName
				})
				.end((err, res) => {
					res.body.should.be.a('object');
					res.body.should.have.property('firstName').eql(newFirstName);
					done();
				});
		});
	});

	//delete fake user
	after((done) => {

		chai.request(server)
			.delete('/api/v1/users/' + fakeUser.user._id)
			.set('Authorization', fakeUser.token)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});
