// Imports small array of users
// Pretend it's an API request
const users = require('./data');

// Fetches all users
const getUsers = () => {
    return users;
}

// Filters users by specific ID
const getUser = id => {
    return users.find(user => user.id === id)
}

function getUserByUsername(username){
    return users.find(user => user.username ===username);
}

function validatePassword(userId, password){
    const user = getUser(userId);
    return user ? user.password ===password:false;
}


// test
// console.log(getUser(3));

module.exports = {getUsers , getUser, validatePassword, getUserByUsername};