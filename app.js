function login(user) {
  if (user.type === "student") {
    return "Student Access";
  }
<<<<<<< HEAD
  if (user.role === "admin") {
    return "Welcome Admin";
  }
  return "Access Denied";
=======
  if (user.type === "admin") {
    return "Admin Access";
  }
  return "Unauthorized";
>>>>>>> c2e2d97 (Changed role to type and messages)
}
module.exports = login;
