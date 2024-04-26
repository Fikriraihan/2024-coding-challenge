function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}

console.log(validateUsr("asddsa"));
console.log(validateUsr("asd43 34"));
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"));
