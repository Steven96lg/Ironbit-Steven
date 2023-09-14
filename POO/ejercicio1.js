
//Definir una función constructora
class Shape {  
    constructor(name, sides, sideLength){
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
    
    calcPerimeter(){
      const perimeter = this.sides * this.sideLength;
      console.log(`El perímetro de ${this.name} es ${perimeter}`);
    }
  }
      
  const square = new Shape("Square", 4, 5);
  square.calcPerimeter();
  const triangle = new Shape("Triangle", 3, 3);
  triangle.calcPerimeter();
  