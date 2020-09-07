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


var secondsLeft = 5;

timerButton.addEventListener("click", function() {
    setTimer();
     timerButton.classList.add("hideMe");
     posiAnswer1.classList.remove("hideMe");
     posiAnswer2.classList.remove("hideMe");
     posiAnswer3.classList.remove("hideMe");
     posiAnswer4.classList.remove("hideMe");
     lineDisp.classList.remove("hideMe");
     answerDisp.classList.remove("hideMe");
}, )

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        countDownNumbDisp.textContent = secondsLeft
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        countDownNumbDisp.textContent = "NO TIME";
    }
    } ,1000) 
}  
