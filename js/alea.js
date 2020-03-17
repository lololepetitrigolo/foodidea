/*
var printemps = [
                [leg, nutri leg, viandes, nutri viande, [accompagnement, accompagnement],[ingredient, ingredient], // menu1
                [leg, nutri leg, viandes, nutri viande, [accompagnement, accompagnement],[ingredient, ingredient], //menu2
                ...
              ]

- créer un tab pour chaque saison / types et un tableau avec tous les plats en commun
- récuperer le btn cliqué
- génerer un nb aléatoire
- décomposer le tableau de réferenece
- modifier la page de base pour afficher les bonnes valeurs
*/
var menu = [
  ["Patates",70,"Roti",50,"midi",""],
  ["Tomates",90,"Jambon",25,"midi",""],
  ["Chou rouge",100,"Poulet",40,"midi",""],
  ["Riz",0,"Aiguilette de poulet",0,"midi",""],
  ["Steak haché",0,"Frites",0,"midi",""],
  ["Petit pois",0,"Côtes de porc",0,"midi",""],
  ["Ratatouile",0,"Poisson pané",0,"midi",""],
  ["Poélée Basquaise",0,"Poisson",0,"midi",""],
  ["Cake au Gorgonzola/Aubergine",0,"",0,"soir","boite d'aubergines, oeuf, farine, gorgonzola, levure chimique"],
  ["Pain perdu",0,"",0,"soir",""],
  ["Crêpes",0,"",0,"soir",""],
  ["Lasagne",0,"",0,"midi",""],
  ["Rizotto",0,"",0,"soir",""],
  ["Salade",0,"Pizza",0,"soir",""],
  ["Gnocchi",0,"",0,"soir",""],
  ["Ravioli",0,"",0,"soir",""],
  ["Raviole",0,"",0,"soir",""],
  ["Lentilles",0,"Saucisse de morteau",0,"midi",""],
  ["Croziflette",0,"",0,"midi",""],
  ["Haricots vert",0,"Aiguilette de poulet",0,"midi",""],
  ["Salsifis",0,"Steak haché",0,"midi",""],
];


function Hide (addr) {
  document.getElementById(addr).style.visibility = "hidden";
}

function Show (addr) {
  document.getElementById(addr).style.visibility = "visible";
  aff();
}

function Hidenav () {
  console.log("oui");
  document.getElementById("check").checked = false;
}

function aff() {
  var n = Math.round(Math.random()*(menu.length-1));

  document.getElementById('leg').innerHTML = menu[n][0];
  document.getElementById('prep').innerHTML ="Ingrédient : "+ menu[n][5];
  document.getElementById('via').innerHTML = menu[n][2];
  document.getElementById('nutrileg').innerHTML = menu[n][1]+"/100";
  document.getElementById('nutrivia').innerHTML = menu[n][3]+"/100";

  //nutriscore
  if (menu[n][1] === 0) {
    document.getElementById('nutrileg').innerHTML = "";
  }
  if (menu[n][3] === 0) {
    document.getElementById('nutrivia').innerHTML = "";
  }

  //prep
  if(menu[n][5] == ""){
    document.getElementById('prep').innerHTML ="";
  }

  //viande
  if(menu[n][2] == ""){
    document.getElementById('via').innerHTML ="";
  }

  //légume
  if(menu[n][0] == ""){
    document.getElementById('leg').innerHTML ="";
  }
  
  
}
