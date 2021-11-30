console.log("login Connected");
const name = document.getElementById("user");
let login = document.getElementById("loginBtn");
login.addEventListener("click", () => {
  let username = name.value;
  console.log(username);
  localStorage.setItem("username", username);
});
