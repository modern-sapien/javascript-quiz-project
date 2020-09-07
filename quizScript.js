console.log("hello cruel world")

var countDownNumbDisp = document.querySelector("#timer");
console.log(countDownNumbDisp)
var quizContainer = document.querySelector("#disappearDiv");
var timerButton = document.querySelector("#timerStart");
console.log(timerButton)
var subHeadDisp = document.querySelector("#subHeadingMain");
var mainHeadDisp = document.querySelector("#headingMain")

var posiAnswer1 = document.querySelector("#answer1");
var posiAnswer2 = document.querySelector("#answer2");
var posiAnswer3 = document.querySelector("#answer3");
var posiAnswer4 = document.querySelector("#answer4");

var lineDisp = document.querySelector("#lineId");
var answerDisp = document.querySelector("#answerDisplay");

var userScore = document.querySelector("#scoreTracker");

var currentPage = 0;
var trackedScore = 0;

// Object array that holds question and answer content
//********************************************************
var gameArray = [
    {   page: 1,
        question: "This is the content for the first page!!",
        answer1: "a lot but wrong",
        answer2: "very much but very wrong",
        answer3: "what is wrong anyway?",
        rightAnswer1: "just enough"
    },
    {
        page: 2,
        question: "This is the content for the second page!!",
        answer1: "answer wrong 1 -2nd page",
        answer2: "answer wrong 2 - 2nd page",
        answer3: "answer wrong 3 - 2nd page",
        rightAnswer2: "answer right 1 - 2nd page"
    },
    {
        page: 3,
        question: "This is the content for the third page!",
        answer1: "answer wrong 1 - 3rd page",
        answer2: "answer wrong 2 - 3rd page",
        answer3: "answer wrong 3 - 3rd page",
        rightAnswer3: "answer right 1 - 3rd"
    },
    {
        page: 4,
        question: "Are you a coder?",
        answer1: "answer wrong 1 - 4th",
        answer2: "answer wrong 2 - 4th",
        answer3: "answer wrong 3 - 4th ",
        rightAnswer4: "answer right 1 - 4th"
    }
]
// TIMER SETTING
//***************************************/
var secondsLeft = 75;
var wrongAnswerLoss = secondsLeft - 15;
//***************************************** */
timerButton.addEventListener("click", function() {
    pageChange1(); //hides appropriate IDs & unhides initial content
                  // initializes with original question content & answer
    setTimer();

}, )

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        countDownNumbDisp.textContent = secondsLeft
    if (secondsLeft < 0) {
        clearInterval(timerInterval);
        countDownNumbDisp.textContent = 0;
        document.getElementById("disappearDiv").remove();
        document.getElementById("lineId").remove();
        answerDisp.textContent = "You Ran Out of Time";
    }
    } ,1000) 
}  

// ************************************************
// HIGH SCORE FUNCTION
function scoreTabulator() {
    scoreTab = (100) + (secondsLeft *10)
    trackedScore = trackedScore + scoreTab
    userScore.textContent = (trackedScore)
}


//Initial Quiz Starting Page
function pageChange1() {
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


function pageChange2() {
    mainHeadDisp.textContent = gameArray[1]["question"];
    posiAnswer1.textContent = gameArray[1]["answer1"];
    posiAnswer2.textContent = gameArray[1]["answer2"];
    posiAnswer3.textContent = gameArray[1]["rightAnswer2"];
    posiAnswer4.textContent = gameArray[1]["answer3"];
}

function pageChange3() {
    mainHeadDisp.textContent = gameArray[2]["question"];
    posiAnswer1.textContent = gameArray[2]["answer1"];
    posiAnswer2.textContent = gameArray[2]["rightAnswer3"];
    posiAnswer3.textContent = gameArray[2]["answer3"];
    posiAnswer4.textContent = gameArray[2]["answer2"];
}

function pageChange4() {
    mainHeadDisp.textContent = gameArray[3]["question"];
    posiAnswer1.textContent = gameArray[3]["answer1"];
    posiAnswer2.textContent = gameArray[3]["rightAnswer4"];
    posiAnswer3.textContent = gameArray[3]["answer3"];
    posiAnswer4.textContent = gameArray[3]["answer2"];
}

posiAnswer1.addEventListener('click', function() {
    if (posiAnswer1 !== gameArray[0]["rightAnswer1"])
    {secondsLeft = secondsLeft -10}
}, )

posiAnswer2.addEventListener('click', function() {
    if (mainHeadDisp.textContent == gameArray[2]["question"] &&
        posiAnswer2.textContent == gameArray[2]["rightAnswer3"])  
    {answerDisp.textContent = "GREAT CODER!!";
    console.log("correct page 3 log");
    scoreTabulator();
    pageChange4(); }
    else if (mainHeadDisp.textContent == gameArray[3]["question"] &&
            posiAnswer2.textContent == gameArray[3]["rightAnswer4"]){
            scoreTabulator();
            answerDisp.textContent = ("QUIZ COMPLETE, CHECK HIGH SCORES");
            document.getElementById("disappearDiv").remove();
            document.getElementById("lineId").remove();
            secondsLeft = 0;
            }

    else {secondsLeft = secondsLeft -10}
    }, )

posiAnswer3.addEventListener('click', function() {
    if (mainHeadDisp.textContent == gameArray[1]["question"] &&
        posiAnswer3.textContent == gameArray[1]["rightAnswer2"]) 
    {answerDisp.textContent = "GOOD JOB CODER!!";
    console.log("correct page 2 log");
    scoreTabulator();
    pageChange3(); }
    else {secondsLeft = secondsLeft -10 }
}, )

posiAnswer4.addEventListener('click', function() {
    if (mainHeadDisp.textContent == gameArray[0]["question"] &&
        posiAnswer4.textContent == gameArray[0]["rightAnswer1"]) {
    answerDisp.textContent = "GOOD CODER!!!";
    {console.log("correct page 1  log"); }
    scoreTabulator();
    pageChange2(); }
    else { secondsLeft = secondsLeft -10}
}, )

