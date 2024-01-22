// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

describe('user functions test',()=>{
    it('Should get user by id',()=>{
        const user = getUser(3);
        expect(user).toEqual({
            id: 3,
            username: "goosemotionless",
            email: "dotmeheart@outlook.com",
            password: "12345abcde"
        })
    })
})

// READ documentation