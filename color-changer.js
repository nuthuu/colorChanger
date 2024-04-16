const colors = ["red", "green", "blue"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColor() {
    const colorBox = document.getElementById("color-box");
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
}

document.getElementById("color-box").addEventListener("click", changeColor);
