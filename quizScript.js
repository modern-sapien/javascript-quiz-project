console.log("hello cruel world")

var countDownNumbDisp = document.querySelector("#timer");
console.log(countDownNumbDisp)
var timerButton = document.querySelector("#timerStart");
console.log(timerButton)
var subHeadDisp = document.querySelector("#subHeading");
var mainHeadDisp = document.querySelector("#headingMain")
var posiAnswer1 = document.querySelector("#answer1");
var posiAnswer2 = document.querySelector("#answer2");
var posiAnswer3 = document.querySelector("#answer3");
var posiAnswer4 = document.querySelector("#answer4");
var lineDisp = document.querySelector("#lineId");
var answerDisp = document.querySelector("#answerDisplay")


var secondsLeft = 75;

timerButton.addEventListener("click", function() {
    setTimer();
}, )

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        countDownNumbDisp.textContent = secondsLeft
    } ,1000) 
}  
