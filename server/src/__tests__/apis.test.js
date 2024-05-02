const request = require('supertest');
const app = require('../app');
const { connectDB, closeDB } = require('../config/db');

beforeAll(async () => {
    await connectDB();
})

afterAll(async () => {
    await closeDB();
})

describe('POST /register', () => {

    test('should return 201 and the user data', async () => {
        const response = await request(app)
            .post('/user/register')
            .send({
                name: 'Issac Newton',
                email: 'isaac@test.com',
                password: 'password',
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('userID');
        expect(response.body).toHaveProperty('userName');
    })
    test('should return 400 if name, email, or password is missing', async () => {
        const response = await request(app)
            .post('/user/register')
            .send({
                name: 'Ada Lovelace',
                email: 'ada@test.com',
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message');
    })
    test('should return 400 if email already exists', async () => {
        const response = await request(app)
            .post('/user/register')
            .send({
                name: 'Issac Newton',
                email: 'isaac@test.com',
                password: 'password',
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message');
    })
});

describe('POST /login', () => {
    test('should return 200 and the user data', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'isaac@test.com',
                password: 'password',
            });
        if (response.statusCode === 500) {
            console.log(response.body)
        }
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('userName');
        expect(response.body).toHaveProperty('authenticated');
        expect(response.body).toHaveProperty('token');
    })
    test('should return 400 if email or password is missing', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'isaac@test.com',
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message');
    })
    test('should return 404 if user not found', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'newton@test.com',
                password: 'password',
            });
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('message');
    })
    test('should return 400 if invalid credentials', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'isaac@test.com',
                password: 'physics',
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message');
    })
})

describe('GET /users', () => {
    let token;
    beforeAll(async () => {
        const loginResponse = await request(app)
            .post('/user/login')
            .send({
                email: 'isaac@test.com',
                password: 'password',
            });
        token = loginResponse.body.token;
    })


    test('should return 200 and an array of users', async () => {
        const response = await request(app)
            .get('/user/users')
            .set('Authorization', `${token}`);
    })
    test('should return 401 if no token is provided', async () => {
        const response = await request(app)
            .get('/user/users');
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message');
    })
    test('should return 401 if token is invalid', async () => {
        const response = await request(app)
            .get('/user/users')
            .set('Authorization', 'Bearer invalidtoken');
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message');
    })
});

describe('GET /logout', () => {
    let userID, token;
    beforeAll(async () => {
        const loginResponse = await request(app)
            .post('/user/login')
            .send({
                email: 'isaac@test.com',
                password: 'password',
            });
        userID = loginResponse.body.id;
        token = loginResponse.body.token;
    })
    test('should return 200 and a message', async () => {
        const response = await request(app)
            .get(`/user/logout/${userID}`)
            .set('Authorization', `${token}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
    })
})

