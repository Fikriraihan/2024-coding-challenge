function validatePIN(pin) {
  return /^[0-9]{4}$/gi.test(pin) || /^[0-9]{6}$/gi.test(pin);
}

console.log(validatePIN("a234"));
console.log(validatePIN("12345"));
console.log(validatePIN("0000"));
console.log(validatePIN("000000"));
