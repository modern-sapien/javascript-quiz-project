console.log("hello cruel world")

var countDownNumbDisp = document.querySelector("#timer");
console.log(countDownNumbDisp)
var timerButton = document.querySelector("#timerStart");
console.log(timerButton)
var subHeadDisp = document.querySelector("#subHeadingMain");
var mainHeadDisp = document.querySelector("#headingMain")
var posiAnswer1 = document.querySelector("#answer1");
var posiAnswer2 = document.querySelector("#answer2");
var posiAnswer3 = document.querySelector("#answer3");
var posiAnswer4 = document.querySelector("#answer4");
var lineDisp = document.querySelector("#lineId");
var answerDisp = document.querySelector("#answerDisplay")

var currentPage = 0

var gameArray = [

    {   page: 1,
        question: "How much do you hate coding?",
        answer1: "a lot but wrong",
        answer2: "very much but very wrong",
        answer3: "what is wrong anyway?",
        rightAnswer1: "just enough"
    },
    {
        page: 2,
        question: "How much do you hate coding?",
        answer1: "answer wrong 1",
        answer2: "answer wrong 2",
        answer3: "answer wrong 3",
        rightAnswer2: "answer right 1"
    },
    {
        page: 3,
        question: "How much do you hate coding?",
        answer1: "answer wrong 1",
        answer2: "answer wrong 2",
        answer3: "answer wrong 3",
        rightAnswer3: "answer right 1"
    },
    {
        page: 4,
        question: "How much do you hate coding?",
        answer1: "answer wrong 1",
        answer2: "answer wrong 2",
        answer3: "answer wrong 3",
        rightAnswer4: "answer right 1"
    }
]
// TIMER SETTING
//***************************************/
var secondsLeft = 75;
var wrongAnswerLoss = secondsLeft - 15;
//***************************************** */
timerButton.addEventListener("click", function() {
    pageChange(); //hides appropriate IDs & unhides initial content
                  // initializes with original question content & answer
    setTimer();

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

function pageChange() {
    timerButton.classList.add("hideMe");
    subHeadDisp.classList.add("hideMe");
    posiAnswer1.classList.remove("hideMe");
    posiAnswer2.classList.remove("hideMe");
    posiAnswer3.classList.remove("hideMe");
    posiAnswer4.classList.remove("hideMe");
    lineDisp.classList.remove("hideMe");
    answerDisp.classList.remove("hideMe");
    mainHeadDisp.textContent = gameArray[0]["question"];
    posiAnswer1.textContent = gameArray[0]["answer1"];
    posiAnswer2.textContent = gameArray[0]["answer2"];
    posiAnswer3.textContent = gameArray[0]["answer3"];
    posiAnswer4.textContent = gameArray[0]["rightAnswer1"];
}

posiAnswer1.addEventListener('click', function() {
    if (posiAnswer1 = gameArray[0]["rightAnswer1"]) 
    { secondsLeft-- //this subtracts extra seconds when you click wrong
      console.log("did this happen.") }
}, )

posiAnswer2.addEventListener('click', function() {
    if (posiAnswer2 !== gameArray[0]["rightAnswer1"]) 
    { secondsLeft-- //this subtracts extra seconds when you click wrong
      console.log("did this happen.") }
}, )

posiAnswer3.addEventListener('click', function() {
    if (posiAnswer3.textContent !== gameArray[0]["rightAnswer1"]);
    { secondsLeft-- //this subtracts extra seconds when you click wrong
      console.log("did this happen.") }
}, )

posiAnswer4.addEventListener('click', function() {
    if (posiAnswer4.textContent !== gameArray[0]["rightAnswer1"]) 
    {console.log("did this happen.") }
}, )