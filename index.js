// document.getElementById("count").innerText = 5;

let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
    count += 1;
    countEl.innerText = count;
}

let saveEL = document.getElementById("save-el");
function save() {
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    countEl.innerText = 0;
    count = 0;

    console.log(count);
}