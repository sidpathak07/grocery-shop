console.log("Index connected");
let username = document.getElementById("username");
let name=localStorage.getItem("username");
name = name.toUpperCase();
username.innerText= `Hello! ${name}`
console.log(name);

function addcart(burgerimg,burgername,burgerprice){
    let cart = localStorage.getItem("cart");
    if(cart == null){
        cartObj=[];
    }else{
        cartObj=JSON.parse(cart);
    }
    let newObj={
        img:burgerimg,
        name:burgername,
        price:burgerprice,
    }
    cartObj.push(newObj);
    localStorage.setItem("cart",JSON.stringify(cartObj));
}