

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
  
  
  class Square extends Shape{
    constructor(sideLength){
      super("Squiare", 4,sideLength);
    }
    
     calcArea() {
      const area = this.sideLength ** 2;
      console.log(`El área de ${this.name} es ${area}`);
    }
  }
  
  const square2 = new Square(5);
  
  // Calcular y mostrar el perímetro del cuadrado
  square2.calcPerimeter();
  
  // Calcular y mostrar el área del cuadrado
  square2.calcArea();