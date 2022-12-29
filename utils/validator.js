const validateName = (name) => {
  const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/);
  return nameRegex.test(name);
};

const validateEmail = (email) => {
  const emailRegex = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
  return emailRegex.test(email);
};
const validatePassword = (password) => {
  const passR = new RegExp(/^[A-Za-z]\w{7,14}$/);
  return passR.test(password);
};
module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
