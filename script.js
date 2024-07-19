const countNum = document.querySelector(".num");

function increment() {
    let value = parseInt(countNum.textContent);
    value = value + 1;
    countNum.textContent = value;
}

function decrement() {
    let value = parseInt(countNum.textContent);
    value = value - 1;
    countNum.textContent = value;
}