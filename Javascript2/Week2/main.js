'use strict';
{

  const bookSection = document.createElement("div");
  bookSection.setAttribute("id", "#book_section")
  const ul = document.createElement("ul");
  bookSection.appendChild(ul);
  //console.log(bookSection)
  
  const bookTitles = [
    "batallas",
    "potter",
    "hunger",
    "senoras",
    "pride",
    "eightyfour",
    "huracanes",
    "utvandrarna",
    "gloria",
    "heights"

  ];

  
  

  /* Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. 
  Make sure that the function names you choose are an accurate reflection of what they do. */

  // function bookList() {

    
  //   for (let i = 0; i < bookTitles.length; i++){

  //   let li = document.createElement("li");
  //     ul.appendChild(li)
  //     li.innerHTML = li.innerHTML += bookTitles[i]
    

  // }
 
  // }
  // bookList();

/* 1.4 Make an object (not an array!) containing information for each book. Each property of this object should be another 
(i.e., nested) object with the book ID you thought up in step 1.1 as a key, and at least the following properties: title,
language and author. */

  let myBooks = {
    batallas: {
      title: '"Las Batallas en el Desierto" / "Battles in the Desert"',
      author: "José Emilio Pacheco",
      year: "1981",
      language: "Spanish"
    },
    potter: {
      title: '"The Harry Potter Series"',
      author: "She Who Must Not Be Named",
      year: "1997 - 2007",
      language: "English"
    },
    hunger: {
      title: '"The Hunger Games"',
      author: "Suzanne Collins",
      year: "2008",
      language: "English"
    },
    senoras: {
      title: '"Emma y Las Otras Señoras del Narco" / "Emma and The Other Ladies of the Narco"',
      author: "Anabel Hernández",
      year: "2021",
      language: "Spanish"
    },
    pride: {
      title: '"Pride and Prejudice"',
      author: "Jane Austen",
      year: "1813",
      language: "English"
    },
    eightyfour: {
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
      title: '"Utvandrarna" / "The Emigrants"',
      author: "Vilhelm Moberg",
      year: "1949",
      language: "Swedish"
    },
    gloria: {
      title: '"La Gloria por el Infierno" / "The Glory for the Hell"',
      author: "Alinee Hernández",
      year: "1998",
      language: "Spanish"
    },
    heights: {
      title: '"Wuthering Heights"',
      author: "Emily Brontë",
      year: "1847",
      language: "English"
    }

  }

  

/* 
1.5 Now change the function from step 1.3 that you used to display the book ID's in a list 
to take the actual information about the book from the object and display that. Make sure you 
choose the correct HTML elements for each piece of info, for instance, a heading for the title.
*/
  
  
  function displayBooks() {

    for (let key in myBooks) {
      

      const main = document.querySelector("main");
      const bookSection = document.createElement("div");
      bookSection.setAttribute("class", "book_section");
      const oneBook = document.createElement("div");
      oneBook.setAttribute("class", "book");
      const h1 = document.createElement("h1");
      const h2 = document.createElement("h2");
      const year = document.createElement("p", ".year")
      const lang = document.createElement("p", ".lang")
      h1.innerHTML = h1.innerHTML += myBooks[key].title;
      h2.innerHTML = h2.innerHTML += myBooks[key].author;
      year.innerHTML = year.innerHTML += myBooks[key].year;
      lang.innerHTML = lang.innerHTML += myBooks[key].language;
      main.appendChild(bookSection);
      bookSection.appendChild(oneBook)
      oneBook.appendChild(h1);
      oneBook.appendChild(h2);
      oneBook.appendChild(year);
      oneBook.appendChild(lang);

    }

  }
 
  //displayBooks();

  /* 1.7 Find and download book covers for each book and construct a new object which has as 
keys the book IDs again, and as value the path to the image source 
(e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }). */

  let bookCovers = {
    batallas: "img/batallas.jpeg",
    potter: "img/halfblood.jpeg",
    hunger: "img/hunger.jpg",
    senoras: "img/emma_narco.jpeg",
    pride: "img/pride.jpeg",
    eightyfour: "img/1984.jpg",
    huracanes: "img/huracanes.jpeg",
    utvandrarna: "img/utvandrarna.jpeg",
    gloria: "img/gloria.jpeg",
    heights: "img/heights.jpeg"
  }

  /* 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing 
  the keys). Then write a function which places an image at the corresponding li element. 
  Remember that objects are not ordered, so you cannot guarantee that the first key is the 
  first li element. (Hint: you could give each li item an id tag by modifying the function you 
  made before.)*/

  function displayCovers() {
    for (let key in bookCovers) {
      const main = document.querySelector("main");
      const cover = document.createElement("img")
      cover.setAttribute("src", bookCovers[key])
      cover.setAttribute("alt", "book cover")
      main.appendChild(cover)
    }
  }
  displayCovers();
};




  
