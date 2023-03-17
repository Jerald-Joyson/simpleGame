var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var gameStarted = false;

function startGame() {
    if (gameStarted) {
        return;
    }
    gameStarted = true;
    block.style.animation = "block 1s infinite linear";
    setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
            if(confirm("Game Over. score: "+Math.floor(counter/100)+"\nDo you want to play again?")){
                window.location.reload();
            }
            else{
                openPage("thankyou.html");
                // counter=0;
                // document.getElementById("scoreSpan").innerHTML = 0;
            }
            // block.style.animation = "block 1s infinite linear";
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }, 10);
}

function openPage(pageUrl) {
    window.location.href = pageUrl;
}

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
