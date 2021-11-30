let username = document.getElementById("username");
let name = localStorage.getItem("username");
name = name.toUpperCase();
username.innerText = `Hello! ${name}`;
console.log(name);

showItems();

function showItems() {
  let list = document.getElementById("cartli");
  console.log(list);
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    cartObj = [];
  } else {
    cartObj = JSON.parse(cart);
  }
  html = "";
  cartObj.forEach((element, index) => {
    html += ` <div class="productli">
        <div class="cart-product">
            <div>
                <img width="150px" height="150px" src="${element.img}" alt="">
            </div>
            <aside>
                <h4>${element.name}</h4>
                <p>Price:-${element.price}/-</p>
            </aside>
        </div>
        <button id="${index+100}" class="btn" onclick="myorder(this.id)">Pay ${element.price}</button>
        <button id="${index}" onclick="deleteOrder(this.id)" class="btn2">Remove</button>
    </div>`;
  });
  if(cartObj.length !=0){
    list.innerHTML=html;
    payfullcart();
  }
  else{
    list.innerHTML=`<span class="fas fa-exclamation-triangle alert" style="font-size:2rem;">Empty Cart</span>`;
  }
}
function payfullcart(){
  let buyall = document.getElementById("BuyAll");
  console.log(buyall);
  let list = localStorage.getItem("cart");
  let listArr = [];
  listArr = JSON.parse(list);
  let buyprice = 0;
  listArr.forEach(element =>{
    buyprice += element.price;
  });
  // console.log(buyprice); 
  buyall.innerHTML =`<span id="payall">Pay ${buyprice} Rs:-</span> <button onclick="buyall()" class="btn-primary btn">Buy All</button>`;
}
function buyall(){
  let payall = document.getElementById("payall");
  let list = localStorage.getItem("cart");
  let listArr = [];
  listArr = JSON.parse(list);
  let buyprice = 0;
  listArr.forEach(element =>{
    buyprice += element.price;
  });
  // console.log(buyprice); 
  let a=confirm(`Want to pay ${buyprice}`);
  if (a == true) {
    let i;
    let order = localStorage.getItem("order");
    let orderObj=[];
    let cart = localStorage.getItem("cart");
    let arr=[];
    arr = JSON.parse(cart);
      arr.forEach((element,index)=>{
        let newObj= new Object();
        newObj['img']=element.img;
        newObj['name']=element.name;
        newObj['price']=element.price;
        orderObj.push(newObj);
      })
      localStorage.setItem("order",JSON.stringify(orderObj));
      console.log(orderObj);
  }
}

function myorder(id){
  let a=confirm("Pay 200Rs and CheckOut");
  if (a == true){
    let order = localStorage.getItem("order");
  let cart = localStorage.getItem("cart");
  let arr=[];
  let newid=id-100;
  arr = JSON.parse(cart);
  console.log(arr[newid].img);
  // cartObj=JSON.parse(cart);
  if(order == null){
      orderObj=[];
  }else{
      orderObj=JSON.parse(order);
  }
  
  let orderimg= cartObj[newid].img;
  let ordername = cartObj[newid].name;
  let orderprice = cartObj[newid].price;
  let newObj = new Object();
  newObj['img']=orderimg;
  newObj['name']=ordername;
  newObj['price']=orderprice;
  console.log(newObj);
  // let newObj={
  //     img:orderimg,
  //     name:ordername,
  //     price:orderprice,
  // }
  orderObj.push(newObj);
  localStorage.setItem("order",JSON.stringify(orderObj));
  }
}

function deleteOrder(id) {
  //   console.log("I am deleting", index);
  
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    cartObj = [];
  } else {
    cartObj = JSON.parse(cart);
  }
    cartObj.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(cartObj));
    showItems();
  }