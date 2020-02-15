class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(number) {
    this.value += number;

    return this
  }

  multiply(number) {
    this.value = this.value * number;

    return this
  }

  subtract(number) {
    this.value -= number;

    return this
  }
}

const result = new Calculator();
console.log(result.add(10).subtract(5).multiply(3).value);
