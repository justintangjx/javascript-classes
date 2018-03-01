class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return parseFloat((Math.PI * this.radius ** 2).toPrecision(3));

  }
  getPerimeter () {
      return parseFloat((2 * Math.PI * this.radius).toFixed(1));
  }
};

module.exports = Circle;

// .toPrecision(3))
    //  var unRoundedArea = Math.PI * this.radius ** 2;
    //  if(unRoundedArea > 10) {
    //     return parseFloat()
    //  }
    //  var roundedArea = Math.round(unRoundedArea * 1e1) / 1e1;
    //  return roundedArea;
    // }
    // var unRoundedArea = Math.PI * this.radius ** 2;
    // var roundedArea = Math.round(unRoundedArea * 100) / 100;
    // return roundedArea;
