function toCamelCase(str) {
  return str.replace(/[-_](...............)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
