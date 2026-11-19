const screen = document.getElementById("screen");
function addkey(value) {
    screen.innerHTML += value;
}
function clearDisplay() {
    screen.innerHTML = "";
}

function deleteLast() {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}

function calculate() {
        screen.innerHTML = eval(screen.innerHTML);
    }