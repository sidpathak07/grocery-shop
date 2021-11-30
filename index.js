console.log("Index connected");
let username = document.getElementById("username");
let name=localStorage.getItem("username");
name = name.toUpperCase();
username.innerText= `Hello! ${name}`
console.log(name);