class Rectangle {
  constructor(breadth, length) {
    this.breadth = breadth;
    this.length = length;
  };
  getArea() {
    return this.breadth * this.length;
  };
  getPerimeter() {
      return (2*this.breadth) + (2*this.length);
  };
}




module.exports = Rectangle;

