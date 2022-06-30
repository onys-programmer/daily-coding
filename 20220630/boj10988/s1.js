const input = require('fs').readFileSync('input.txt').toString().trim();
console.log((input.split("").reverse().join("") === input) * 1);
