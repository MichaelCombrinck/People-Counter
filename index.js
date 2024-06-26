let saveEl = document.getElementById("save-value");
let value = document.getElementById("countEl");

let count = 0;


function onIncrementCountClick() {
    count += 1;
    value.textContent = count
}

function onSaveClick ()  {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    value.textContent = 0;
}