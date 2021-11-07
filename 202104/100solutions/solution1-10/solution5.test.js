test('calculator', () => {
  function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };

    this.calculate = function(str) {
      let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  const calc = new Calculator();
  expect(calc.calculate("3 + 7")).toBe(10);
});
