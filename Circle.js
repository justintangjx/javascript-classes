class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    var unRoundedArea = Math.PI * this.radius ** 2;
    var roundedArea = Math.round(unRoundedArea * 100) / 100;
    return roundedArea;
  }
  // return (Math.PI * this.radius ** 2).toPrecision(3);
}

module.exports = Circle;
