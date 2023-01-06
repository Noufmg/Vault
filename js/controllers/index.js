import { getUsers } from "../models/user.js";
// MAIN
const users = getUsers();
if (users.length == 0) {
  // Display create vault form
  document.getElementById("enterForm").classList.toggle("hidden");
} else {
  // Display enter vault form
  document.getElementById("createForm").classList.toggle("hidden");
}
