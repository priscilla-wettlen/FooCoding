fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(data => {

  //console.log(data);

     //Function to get a random integer between two speciified values
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  
    }
    console.log(getRandomIntInclusive(0, 62));
    
    const button = document.getElementById('random_character');

    //Connected the function to the button. Random number/character shows in the console
    button.onclick = function () {
      
      console.log(getRandomIntInclusive(0, 62));
      //Log the result appended to the 'data' and it gives you a random chatacter info
      console.log(data[getRandomIntInclusive(0, 62)]);
    }
    
    
  });

