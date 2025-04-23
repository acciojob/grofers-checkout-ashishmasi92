const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);




const getSum = () => {
    let table = document.querySelector("table")
<<<<<<< HEAD
    let prices = document.getElementsByClassName("price")
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.className = "total"
=======
let prices = document.getElementsByClassName("price")
let tr = document.createElement("tr");



let td2 = document.createElement("td");
td2.className="total_price"
>>>>>>> 9962e960ad0201b9ab7a2fa3bfe4edf62ae6d0b7

    if (!table || prices.length === 0) return;
  
    td1.innerHTML = "Total Price"
    let td2 = document.createElement("td");
    td2.setAttribute("data-testid", "total-price");

<<<<<<< HEAD
    let sum = 0
    for (let t of prices) {
        sum = sum + parseInt(t.innerHTML);

    }
    td2.innerText = sum

    table.append(tr)
    tr.append(td1, td2)
=======
table.append(tr)
tr.append(td2)
>>>>>>> 9962e960ad0201b9ab7a2fa3bfe4edf62ae6d0b7


};

getSumBtn.addEventListener("click", getSum);

