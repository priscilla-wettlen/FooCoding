
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length)

//Utilized global replacement to replace all commas with spaces. Without global replacement only the fist comma disappears
let sameString = "hello,this,is,a,difficult,to,read,sentence";
let newString = sameString.replace(/,/g," ");
console.log(newString);