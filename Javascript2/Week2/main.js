'use strict';
{

  const bookSection = document.createElement("div", ".book_section");
  const ul = document.createElement("ul");
  bookSection.appendChild(ul);
  console.log(bookSection)
  
  const bookTitles = [
    "batallas_desierto",
    "harry_potter",
    "hunger_games",
    "senoras_narco",
    "pride_prejudice",
    "1984",
    "huracanes",
    "utvandrarna",
    "gloria_infierno",
    "wuthering_heights"

  ];

  
  

  /* Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. 
  Make sure that the function names you choose are an accurate reflection of what they do. */

  function bookList() {

    
    for (let i = 0; i < bookTitles.length; i++){

    let li = document.createElement("li");
      ul.appendChild(li)
      li.innerHTML = li.innerHTML += bookTitles[i]
    

  }
 
  }
  bookList();

  myBooks = {
    batallas_desierto: {
      title: '"Las Batallas en el Desierto" / "Battles in the Desert"',
      author: "José Emilio Pacheco",
      year: "1981",
      language: "Spanish"
    },
    harry_potter: {
      title: '"The Harry Potter Series"',
      author: "She Who Must Not Be Named",
      year: "1997 - 2007",
      language: "English"
    },
    hunger_games: {
      title: '"The Hunger Games"',
      author: "Suzanne Collins",
      year: "2008",
      language: "English"
    },
    senoras_narco: {
      title: '"Emma y Las Otras Señoras del Narco" / "Emma and The Other Ladies of the Narco"',
      author: "Anabel Hernández",
      year: "2021",
      language: "Spanish"
    },
    pride_prejudice: {
      title: '"Pride and Prejudice"',
      author: "Jane Austen",
      year: "1813",
      language: "English"
    },
    1984: {
      title: '"1984"',
      author: "George Orwell",
      year: "1949",
      language: "English"
    },
    huracanes: {
      title: '"Temporada de Huracanes" / "Hurricane Season"',
      author: "Fernanda Melchor",
      year: "2017",
      language: "Spanish"
    },
    utvandrarna: {
      title: '"Utvandrarna" / "The emigrants"',
      author: "Vilhelm Moberg",
      year: "1949",
      language: "Swedish"
    },
    gloria_infierno: {
      title: '"La Gloria por el Infierno" / "The Glory for the Hell"',
      author: "Alinee Hernández",
      year: "1998",
      language: "Spanish"
    },
    wuthering_heights: {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: "1847",
      language: "English"
    }

  }


};