let paragraph = "The quick brown fox jumped over the lazy dog. It barked.";

let regex = /[A-Z]/g;
let found = paragraph.match(regex);
console.log(found);
