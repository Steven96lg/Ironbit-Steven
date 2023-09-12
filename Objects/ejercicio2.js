
// Put your code here

const band = {
    "name": "Guns N' Roses",
    "nationality": "United States",
    "genre": "Hard Rock",
    "members": 5,
    "formed": 1985,
    "split": false,
    "albums": [
      {
        "name": "Appetite for Destruction",
        "released": 1987
      },
      {
        "name": "Use Your Illusion I",
        "released": 1991
      },
    ]
  };
  
  let bandInfo  = `Guns N' Roses es una banda de rock originaria de ${band['nationality']}. La banda se formó en ${band.formed} y ha estado activa desde entonces. Su estilo musical principal es el ${band['genre']}. Lanzaron su primer álbum titulado "${band.albums[0].name}" en ${band.albums[0].released}.`;
  
  // Don't edit the code below here
  
  let para1 = document.createElement('p');
  para1.textContent = bandInfo;
  section.appendChild(para1);
      
    