

function Cat(name, breed, color) {
   
    const cat = {};
  
    cat.name = name;
    cat.breed = breed;
    cat.color = color;
  
    cat.greeting = function () {
      console.log(`Meow! My name is ${this.name}, I'm a ${this.color} ${this.breed}.`);
    };
  
    return cat;
  }
  
  const cat1 = Cat('Bertie', 'Cymric', 'white');
  const cat2 = Cat('Whiskers', 'Siamese', 'gray');
  
  cat1.greeting();  
  cat2.greeting();  
  
  
  