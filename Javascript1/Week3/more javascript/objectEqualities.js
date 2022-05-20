/* 
Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter?
*/

let o1 = { foo: "dog" };
let o2 = { foo: "egg" };
let o3 = o2;

const firstEquality = (o3, o2) => o3 === o2 ? true : false;
firstEquality();

const secondEquality = (o1, o3) => o1 === o3 ? true : false;
secondEquality();

// Yes, it does change it automatically
// No, the order does not matter. I still get the same result