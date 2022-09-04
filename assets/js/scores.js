var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var back = document.querySelector("#goBack");

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);

if(scores !== null) {
    for(var i=o; i< scores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = scores[i].name + " " + scores[i].scores;
        highScore.appendChild(createLi);
    }
}

goBack.addEventListener("click", function (){
    window.location.replace("./index.html");
});