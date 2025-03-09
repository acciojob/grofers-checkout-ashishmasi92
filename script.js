const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let table = document.querySelector("table")
let prices = document.getElementsByClassName("price")
let tr = document.createElement("tr");



let td2 = document.createElement("td");
td2.className="total_price"

let sum =0
for(let t of prices){
    sum= sum+parseInt(t.innerHTML);
    
}
td2.innerText=sum

table.append(tr)
tr.append(td2)


};

getSumBtn.addEventListener("click", getSum);

