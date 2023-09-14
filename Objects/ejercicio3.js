
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Hello, said Bertie the Cymric.');
    }
  }
  
  const cat2 = {
    name: 'Whiskers',
    breed: 'Siamese',
    color: 'gray',
    greeting: function () {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    },
  };
  
  cat.greeting();  
  cat2.greeting();