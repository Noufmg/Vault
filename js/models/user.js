const fs = require("fs");

// USER MANAGEMENT
const userDirectory = "./users";

// Returns a list of users
export function getUsers() {
  return fs.readdirSync(userDirectory);
}
// Returns a user's data
function getUserData(id) {
  return fs.readFileSync(userDirectory + "/" + id);
}
