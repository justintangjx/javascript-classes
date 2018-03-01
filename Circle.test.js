var Circle = require("./Circle");

test("Circle(1).getArea() should return 3.14", function() {
  var circle = new Circle(1);
  expect(circle.getArea()).toEqual(3.14);
});

test("Circle(2).getArea() should return 12.6", function() {
  var circle = new Circle(2);
  expect(circle.getArea()).toEqual(12.6);
});

test("Circle(3).getArea() should return 28.3", function() {
  var circle = new Circle(3);
  expect(circle.getArea()).toEqual(28.3);
});

test("Circle(1).getPerimeter() should return 6.3", function() {
  var circle = new Circle(1);
  expect(circle.getPerimeter()).toEqual(6.3);
});

test("Circle(2).getPerimeter() should return 12.6", function() {
  var circle = new Circle(2);
  expect(circle.getPerimeter()).toEqual(12.6);
});

test("Circle(3).getPerimeter() should return 6.3", function() {
  var circle = new Circle(3);
  expect(circle.getPerimeter()).toEqual(18.8);
});
