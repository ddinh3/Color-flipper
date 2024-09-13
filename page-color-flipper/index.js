const body = document.getElementsByTagName("body")[0]
// body.style.backgroundColor = "red" test code to see if it works

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.random() * 255
}