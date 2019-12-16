const myData = require("axios");

myData
  .get("https://jsonplaceholder.typicode.com/users/")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

console.log(myData.then);
