showOrder();

function showOrder(){
    let orders  = document.getElementById("myorder");
    let orderList = localStorage.getItem("order");
    console.log(orderList);
    let orderArr = [];
    orderArr = JSON.parse(orderList);
    console.log(orderArr);
    html = "";
    orderArr.forEach((element,index) => {
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
        <button id="${index}" onclick="cancelOrder(this.id)" class="btn2">Cancel Order</button>
    </div>`;
    });
    if(orderArr.length != 0){
        orders.innerHTML = html;
    }
    else{
        orders.innerHTML = `<span class="fas fa-exclamation-triangle alert" style="font-size:2rem;">No Orders</span>`;
    }
}

function cancelOrder(id){
    let a = confirm("Are you sure to Cancel Order");
    if(a==true){
        let orderList = localStorage.getItem("order");
        console.log(orderList);
        let orderArr = [];
        orderArr = JSON.parse(orderList);
        orderArr.splice(id,1);
        localStorage.setItem("order",JSON.stringify(orderArr));
        location.reload();
    }
}