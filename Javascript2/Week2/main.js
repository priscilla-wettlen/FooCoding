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
      language: "Spanish",
      info: "https://en.wikipedia.org/wiki/Battles_in_the_Desert",
      img: "img/batallas.jpeg"
    },
    potter: {
      title: '"Harry Potter and The Half-Blood Prince"',
      author: "She Who Must Not Be Named",
      year: "2006",
      language: "English",
      info: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
      img: "img/halfblood.jpeg"
    },
    hunger: {
      title: '"The Hunger Games"',
      author: "Suzanne Collins",
      year: "2008",
      language: "English",
      info: "https://en.wikipedia.org/wiki/The_Hunger_Games_(novel)",
      img: "img/hunger.jpg"
    },
    senoras: {
      title: '"Emma y Las Otras Señoras del Narco" / "Emma and The Other Ladies of the Narco"',
      author: "Anabel Hernández",
      year: "2021",
      language: "Spanish",
      info: "https://marketresearchtelecast.com/emma-and-the-other-narco-ladies-the-book-that-unleashes-a-scandal-in-mexico-by-linking-famous-celebrities-with-the-drug-lords/222267/",
      img: "img/emma_narco.jpeg"
    },
    pride: {
      title: '"Pride and Prejudice"',
      author: "Jane Austen",
      year: "1813",
      language: "English",
      info: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      img: "img/pride.jpeg"
    },
    eightyfour: {
      title: '"1984"',
      author: "George Orwell",
      year: "1949",
      language: "English",
      info: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
      img: "img/1984.jpg"
    },
    huracanes: {
      title: '"Temporada de Huracanes" / "Hurricane Season"',
      author: "Fernanda Melchor",
      year: "2017",
      language: "Spanish",
      info: "https://en.wikipedia.org/wiki/Hurricane_Season_(novel)",
      img: "img/huracanes.jpeg"
    },
    utvandrarna: {
      title: '"Utvandrarna" / "The Emigrants"',
      author: "Vilhelm Moberg",
      year: "1949",
      language: "Swedish",
      info: "https://en.wikipedia.org/wiki/The_Emigrants_(Moberg_novel)",
      img: "img/utvandrarna.jpeg"
    },
    gloria: {
      title: '"La Gloria por el Infierno" / "The Glory for the Hell"',
      author: "Alinee Hernández",
      year: "1998",
      language: "Spanish",
      info: "Not found",
      img: "img/gloria.jpeg"
    },
    heights: {
      title: '"Wuthering Heights"',
      author: "Emily Brontë",
      year: "1847",
      language: "English",
      info: "https://en.wikipedia.org/wiki/Wuthering_Heights",
      img: "img/heights.jpeg"
    }

  }

  
  
  
  function displayBooks() {

    for (let key in myBooks) {
        const main = document.querySelector("main");
        const cover = document.createElement("img")
        cover.setAttribute("src", myBooks[key].img)
        cover.setAttribute("alt", "book cover")
        main.appendChild(cover)

        const bookSection = document.createElement("div");
        bookSection.setAttribute("class", "book_section");
        const oneBook = document.createElement("div");
        oneBook.setAttribute("class", "book");
      
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const year = document.createElement("p", ".year")
        const lang = document.createElement("p", ".lang")
      const info = document.createElement("a")
      info.setAttribute("href", myBooks[key].info)
      info.setAttribute("alt", "Click to view more information about this book")
      info.setAttribute("target", "_blank")
      
        h1.innerHTML = h1.innerHTML += myBooks[key].title;
        h2.innerHTML = h2.innerHTML += myBooks[key].author;
        year.innerHTML = year.innerHTML += myBooks[key].year;
        lang.innerHTML = lang.innerHTML += myBooks[key].language;
        info.innerText = info.innerText += "More info";
        main.appendChild(bookSection);
        bookSection.appendChild(cover)
        bookSection.appendChild(oneBook)
        //cover.appendChild(oneBook)
        oneBook.appendChild(h1);
        oneBook.appendChild(h2);
        oneBook.appendChild(year);
        oneBook.appendChild(lang);
        oneBook.appendChild(info);
      
      
      

      const onLoad = () => {
        oneBook.style.display = "none"
        cover.style.display = "block"
      }

      cover.addEventListener("load", onLoad);

      const mouseOver = () => {
        //cover.style.display = "none";
        cover.style.position = "absolute"
        cover.style.opacity = "0.2"
        oneBook.style.display = "block"
        oneBook.style.position = "relative"

        
        
      }
      const mouseOut = () => {
        cover.style.display = "block";
        cover.style.opacity = "1"
        oneBook.style.display = "none";
        cover.style.position = "relative"
        oneBook.style.position = "absolute"
        
      }

      
      cover.addEventListener("mouseenter", mouseOver)
      cover.addEventListener("mouseleave", mouseOut)


    }

  }
 
  displayBooks();

  
    

  
};




  
