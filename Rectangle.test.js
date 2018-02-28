var Rectangle = require("./Rectangle");

test("Rectangle(2,4).getArea() should return 8",
  function() {
    var rectangle = new Rectangle(2, 4);
    expect(rectangle.getArea()).toEqual(8);
  });

test("Rectangle(5,10).getArea() should return 50",
  function() {
    var rectangle = new Rectangle(5, 10);
    expect(rectangle.getArea()).toEqual(50);
  });
