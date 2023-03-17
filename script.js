var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var gameStarted = false;
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

let highScore = localStorage.getItem("high-scores") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

function startGame() {
    if (gameStarted) {
        return;
    }
    gameStarted = true;
    block.style.animation = "block 1s infinite linear";
    setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
            block.style.animation = "none";
            if (confirm("Game Over. score: " + Math.floor(counter / 100) + "\nDo you want to play again?")) {
                window.location.reload();
            }
            else {
                openPage("thankyou.html");
            }
        } else {
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
            highScore = Math.floor(counter / 100) >= highScore ? Math.floor(counter / 100) : highScore; // if score > high score => high score = score
            localStorage.setItem("high-scores", highScore);
            highScoreElement.innerText = `High Score: ${highScore}`;
        }
    }, 10);
}

function openPage(pageUrl) {
    window.location.href = pageUrl;
}

function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}
