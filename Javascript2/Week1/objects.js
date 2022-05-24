fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(data => {

    console.log(data);

    //Function to get a random integer between two speciified values
    // function getRandomIntInclusive(min, max) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min + 1) + min);
  
    // }
    //console.log(getRandomIntInclusive(0, 62));
    
    // const button = document.getElementById('random_character');
    // const container = document.getElementById('container');
    // const name = document.querySelector('.name');
    // const image = document.createElement('img');

    //Connected the function to the button. Random number/character shows in the console
    // button.onclick = function () {
      
    //console.log(getRandomIntInclusive(0, 62));
    //Log the result appended to the 'data' and it gives you a random chatacter info
    //console.log(data[getRandomIntInclusive(0, 62)]);

    //Appended to a p element and now it appears in the format name: bla blla
    // name.innerText = `Name: ${(data[getRandomIntInclusive(0, 62)].name)}`;
    // image.setAttribute("src", (data[getRandomIntInclusive(0, 62)].img));
    // document.querySelector(".image").appendChild(image);


    //}

    let characters = [];
    characters = data;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
  
      }
    
    //How to access the key char_id
    //x = console.log(characters[getRandomIntInclusive(0,62)].name);

    
    
    // function getRandomIntInclusive(min, max) {
    //    min = Math.ceil(min);
    //    max = Math.floor(max);
    //    return Math.floor(Math.random() * (max - min + 1) + min);
  
    //  }
  
    const button = document.getElementById('random_character');
    const container = document.getElementById('container');
    const name = document.querySelector('.name');
    const nickname = document.querySelector('.nickname');
    const occupation = document.querySelector('.occupation');
    const portrayed = document.querySelector('.portrayed');
    const status = document.querySelector('.status');
    const image = document.createElement('img');
    const btn = document.createElement("input")
    btn.setAttribute("class", ".hide")
    btn.setAttribute("type", "button")
    btn.setAttribute("value", "Hide")
    btn.style.backgroundColor = "#41895C"
    btn.style.color = "#F0E8C1"
    

    button.onclick = function() {
      
      const randomChar = data[getRandomIntInclusive(0, 62)].char_id;
      container.style.backgroundColor = "#D8C453";
      container.style.display = "block"
      name.innerText = `Name: ${(data[randomChar].name)}`;
      nickname.innerText = `Nickname: ${(data[randomChar].nickname)}`;
      occupation.innerText = `Occupation: ${(data[randomChar].occupation)}`;
      status.innerText = `Status: ${(data[randomChar].status)}`;
      portrayed.innerText = `Portrayed: ${(data[randomChar].portrayed)}`;
      console.log(randomChar);
      image.setAttribute("src", (data[randomChar].img));
      document.querySelector(".image").appendChild(image);
      container.appendChild(btn);
      

    }

    btn.addEventListener('click', function handleHide() {
      if (container.style.display === "none") {
        container.style.display = "block";
      } else {
        container.style.display = "none"
      }
    });
      
      
    
    
    
      
    
      
    

    
      
    
    
    

  });

