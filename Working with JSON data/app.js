
const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
.then(response => response.json())
.then(text => displayCatInfo(text))


function displayCatInfo(catString) {
let male = 0;
let female = 0;
let names = [];

// Add your code here
//Total de Gatos machos y hembras

names = catString.map(cat => {return cat.name})
motherInfo += names.slice(0, -1).join(', ') + ' y ' + names.slice(-1);

catString.map(cats => {
    cats['kittens'].map(cat => {
    if(cat.gender === 'm'){
        male++
        return
    }   
    female++
    })
})


kittenInfo = `Total: ${male + female}, male: ${male}, female: ${female}`

// Don't edit the code below here!


para1.textContent = motherInfo;
para2.textContent = kittenInfo;
}


section.appendChild(para1);
section.appendChild(para2);
