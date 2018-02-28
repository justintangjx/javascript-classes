var Circle = require("./Circle");

test("Circle(1).getArea() should return 3.14", function() {
  var circle = new Circle(1);
  expect(circle.getArea()).toEqual(3.14);
});

test("Circle(2).getArea() should return 3.14", function() {
  var circle = new Circle(2);
  expect(circle.getArea()).toEqual(12.6);
});
