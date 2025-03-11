const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let table = document.querySelector("table")
    let prices = document.getElementsByClassName("price")
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.className = "total"
    td1.id = "ans"
    td1.innerHTML = "Total Price"
    let td2 = document.createElement("td");
    td2.className = "total_price"
    td2.id = "ans"
    let sum = 0
    for (let t of prices) {
        sum = sum + parseInt(t.innerHTML);

    }
    td2.innerText = sum

    table.append(tr)
    tr.append(td1, td2)


};

getSumBtn.addEventListener("click", getSum);

