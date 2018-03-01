
var SimpleCalculator = require("./SimpleCalculator");


test("0 add(1) should return 1", function() {
    var calculator = new SimpleCalculator();
    expect(calculator.add(1).value).toEqual(1);
  });


test("1 subtract(1) should return 0", function() {
    var calculator = new SimpleCalculator(1);
    expect(calculator.subtract(1).value).toEqual(0);
  });

  test("2 multipy(2) should return 4", function() {
    var calculator = new SimpleCalculator(2);
    expect(calculator.multiply(2).value).toEqual(4);
  });

  test("2 divide(1) should return 2", function() {
    var calculator = new SimpleCalculator(2);
    expect(calculator.divide(1).value).toEqual(2);
  });

  test("4 divide(2) multiply(2) should return 4", function() {
    var calculator = new SimpleCalculator(4);
    expect(calculator.divide(2).multiply(2).value).toEqual(4);
  });

  test("4 add(2) multiply(2) should return 12", function() {
    var calculator = new SimpleCalculator(4);
    expect(calculator.add(2).multiply(2).value).toEqual(12);
  });