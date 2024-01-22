// You already have the methods imported
const { default: expect } = require('expect');
const {getUsers , getUser, validatePassword, getUserByUsername} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

describe('user functions test',()=>{
    it('Should get user by its id',()=>{
        const user = getUser(3);
        expect(user).toEqual({
            id: 3,
            username: "goosemotionless",
            email: "dotmeheart@outlook.com",
            password: "12345abcde"
        })
    })
    it ('Should get user by its username',()=>{
        const user = getUserByUsername("piderman")
        expect(user).toEqual({
            id: 2,
            username: "piderman",
            email: "parkerdapete@gmail.com",
            password: "2D$aLzX9(_2"
        })
    })
    it ('Should validate password',()=>{
        const password= validatePassword(4,"Kashmir1970")
        expect (password).toEqual(true)
    })
})

// READ documentation