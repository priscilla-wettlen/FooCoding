fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(data => {

  
    console.log(data[1])
    console.log(data.length)
    console.log(data[50].occupation)

});
