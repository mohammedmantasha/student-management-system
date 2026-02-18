function login(user) {
  if (user.type === "student") {
    return "Student Access";
  }
  if (user.type === "admin") {
    return "Admin Access";
  }
  return "Unauthorized";
}
module.exports = login;
