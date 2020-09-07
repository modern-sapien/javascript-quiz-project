
This is a document for strategizing how I will accomplish creating the Javascript Quiz Assignment


Step One - Create a landing page
   
    top nav bar
        top left - link to high scores
        top right timer countdown
    
    Div content holder 
        <h1> - Coding Quiz Challenge
        <h2> - "try and take this quiz blah blah."
        container 
        <div id = answer> "start quiz button in this instance
        <div id = answer> hidden
        <div id = answer> hidden
        <div id = answer> hidden
        container
        <div = line> hidden
        <h2>         hidden


    Timer already exists at the top right hand side, but hasn't been started
    
    Top left hand side is a high score link
    
    Content saying there is a quiz here
    
    a button to start

    div
    hidden line
    answer - content

Step 2 Target
## TARGETS
    id="timer" linked with countDownNumbDisp variable
    id="timeStart" - button that clicks & begins quiz
    id="subHeading" - displays content, but disappears on quiz begin
    id="headingMain" -changes content to question content
    id="answer1" - unhide/add content
    id="answer2" - unhide/add content
    id="answer3" - unhide/add content
    id="answer4" - unhide/add content
    id= "lineId" - unhide
    id= "answerDisplay" - unhide
## 1. Click to call function
[done] id= "timeStart" is what will initialize the timer 

## Upon timeStart click // hideMe
id= "timeStart" set attribute "class", "hideMe" 
id= "subHeadingMain" set attribute "class" "hideMe"
## Upon timeStart click // unhideMe
id = "timer" begin time loop countdown from 75 

id= "headingMain" is where questions will be displayed
id = "answer1", "answer2", "answer3", "answer4" // needs class  at start

Create Four of these
QuizGameArray = [
    Question: one
    Answer: 1
    Answer: 2
    Answer: 3
    Answer: 4
]

Function Change Page
Cycles Between Content
[1] [2] [3] [4] <<< all quizzes 

[5] <<< highscore initials page
All Done
Your Score
Enter Initials[              ] << form [SUBMIT] << submit button