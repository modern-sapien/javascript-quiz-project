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