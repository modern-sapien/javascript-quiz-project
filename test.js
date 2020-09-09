console.log("hello cruel world")
// This container will be where the FORM populates when the testing is over
var containerDiv = document.querySelector(".m-auto")
// This is the timer span in the upper right hand corner
var countDownNumbDisp = document.querySelector("#timer");
// This is removed when the quiz is over
var quizContainer = document.querySelector("#disappearDiv");

// This is the button that starts the beginnging of the quiz
var timerButton = document.querySelector("#timerStart");

var subHeadDisp = document.querySelector("#subHeadingMain");
var mainHeadDisp = document.querySelector("#headingMain")
// Possible answer target ID divs
var posiAnswer1 = document.querySelector("#answer1");
var posiAnswer2 = document.querySelector("#answer2");
var posiAnswer3 = document.querySelector("#answer3");
var posiAnswer4 = document.querySelector("#answer4");

// Form Submission
var submissionButton = document.querySelector("subButty");
var formSubz = document.querySelector("#formz");
var lineDisp = document.querySelector("#lineId");
var answerDisp = document.querySelector("#answerDisplay");
var initialText = document.querySelector("#initialText")
var userScore = document.querySelector("#scoreTracker");

var currentPage = 0;
var trackedScore = 0;

//*******************************************************
// LOCAL STORAGE 
var scoreStorageArray = [];


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
    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        countDownNumbDisp.textContent = 0;
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

//*************************************************/
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
//******************************************************************
//FINAL PAGE 
function pageChange5() {
    answerDisp.textContent = ("QUIZ COMPLETE!");
    document.getElementById("disappearDiv").remove();
    document.getElementById("lineId").remove();
    mainHeadDisp.classList.remove("text-center");
    mainHeadDisp.textContent = ("All done!");
    subHeadDisp.classList.remove("text-center");
    subHeadDisp.textContent = ("YOUR SCORE: " + trackedScore);
    subHeadDisp.classList.remove("hideMe");
    answerDisp.classList.add("hideMe");
    formSubz.classList.remove("hideMe");
    
    // submitScore();
}    
    
//**************************************************************
// POSSIBLE ANSWERS AREA
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
            secondsLeft = 0;
            pageChange5();
            
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
    {console.log("correct page 1 log"); }
    scoreTabulator();
    pageChange2(); }
    else { secondsLeft = secondsLeft -10}
}, )


//*************************************************************************
//SUBMISSION 
// SET ARRAY in Application 
//*************************************************************************
subButty.addEventListener("click", function(event) {
        arrayScore = trackedScore;
        initials = initialText.value;
        console.log(arrayScore);
        console.log(initials);
        debugger

        var scoreStorageArray = JSON.parse(localStorage.getItem("infinityKey"));
        if (scoreStorageArray === null) {
            scoreStorageArray = [];
        }
        // array where I am storing values for user entry initials and high scores
        scoreStorageArray.push(
            {   userEntry: initials,
                highScore: trackedScore 
            } );
        
        // this will log keys and values, but not a key with multiple values.
        for (var i = 0; i < scoreStorageArray.length; i++) {
        // if (scoreStorageArray[i] === initials) {
        //         arrayScore[i].
        // }
        
        }
        localStorage.setItem("infinityKey", JSON.stringify(scoreStorageArray));
        
    });
