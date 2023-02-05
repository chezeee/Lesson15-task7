/**
 * Constructor function
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */
function User(firstName, lastName, age) {}

// This has to be a function (not an arrow function)
User.prototype.getFullName = function () {};

// This has to be a function (not an arrow function)
User.prototype.canVote = function () {};

// Sample usage (do not modify)
const user = new User("Sam", "Blue", 43);
user.getFullName(); // "Sam Blue"
user.canVote(); // true
