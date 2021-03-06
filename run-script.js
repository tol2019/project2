let studentId = "";
let scene = 0;
let expertQuizQuestions = {};
let finalQuizQuestions = {};
let startTime = 0;
let endTime = 0;
let qIndex = 0;
let inIntro = true;
let inQuiz = false;
let quizSelf = [];
let quizOthers = [];

$(document).ready(function () {
  // $("#button-container").hide();
  $("#intro").hide();
  $("#player").hide();
  $("#teach").hide();
  $("#feedbackContainer").hide();
  $("#studentId").hide();
});

function introduction() {
  scene = 1;
  // $("#intro").show();
  $("#player").show();
  startTime = 0;
  endTime = 36;
  loadVideo("YAyjVtHm418", startTime, endTime, 'large');
}

function introductionText() {
  $("#player").hide();
  $("#intro").show();
  qIndex = 0;
  currentQuestions = introductionScripts;
  makeQuestion(currentQuestions);
}

function chooseStudent() {
  scene = 2;
  $("#section").html("Select Role")
  $("#player").hide();
  $("#studentId").show();
  $("#intro").hide();
  stopVideo();

  $(".studentId div button").click(function () {
    if (this.id === "stuA") {
      studentId = "stuA";
      startTime = 0;
      endTime = 78; // 78
      currentQuestions = questions.filter(i => i.name.substr(0, 5) === "grind");
      console.log(expertQuizQuestions);
    } else if (this.id === "stuB") {
      studentId = "stuB";
      startTime = 88;
      endTime = 155; 
      currentQuestions = questions.filter(i => i.name.substr(0, 6) === "honing");
    } else {

    }
    console.log(studentId);
    $(".studentId").hide();
    instruction();
  });
}


function instruction() {
  $("#feedbackContainer").hide();

  if(studentId==="stuA"){
    $("#section").html("Learn Grinding");
  } else if (studentId === "stuB"){
    $("#section").html("Learn Honing");
  }
  $("#player").show();
  loadVideo("gUH_GA-L-MM", startTime, endTime, 'large');
  // scene = 3;
}

function checkUnderstanding() {
  if (studentId === "stuA") {
    currentQuestions = questions.filter(i => i.name.substr(0, 5) === "grind");
  } else if (studentId === "stuB") {
    currentQuestions = questions.filter(i => i.name.substr(0, 6) === "honing");
  } 
  $("#section").html("Check Your Understanding");
  console.log("quiz01");
  $("#player").hide();
  // console.log(expertQuizQuestions);
  qIndex = 0;
  console.log(currentQuestions);
  makeQuestion(currentQuestions);
}


function makeQuestion(questions) {
  $("#currQuestion").text(questions[qIndex].text);
  // makeButtons(questions);

  let buttons = questions[qIndex].buttons
  $("#buttonContainer").empty();
  buttons.forEach(b => {
    $("<button/>", {
      id: b.id,
      text: b.description,
    })
      .addClass("btn btn-outline-secondary options")
      .attr("onClick", "giveFeedback(\"" + questions + "\",\"" + b.answer + "\",\"" + b.feedback + "\",\"" + b.whereTo + "\")")
      .appendTo("#buttonContainer")

    if (b.image != "") {
      $("<img>", { src: b.image }).appendTo("#" + b.id)
    }
  });
  $("#questionContainer").show("slow");

}

function giveFeedback(questions, cor, words, whereTo) {
  console.log("feedback", JSON.stringify(questions));
  $("#questionContainer").hide()
  $("#feedbackContainer").show();

  if (!inQuiz && !inIntro) {
    if (cor === 'true') {
      $("<h3/>", { text: "Correct!" })
        .css('background-color', '#99ff99')
        .appendTo("#feedbackContainer");
    } else {
      $("<h3/>", { text: "That's not correct..." })
        .css('background-color', '#ff6699')
        .appendTo("#feedbackContainer");

      currentQuestions.push(currentQuestions[qIndex]);
    }
    $("<p/>", { text: words }).appendTo("#feedbackContainer");

    $("<button/>", { text: "Continue" })
      .attr("onClick", "clearFeedback(\"" + questions + "\")")
      .addClass("btn btn-outline-secondary")
      .appendTo("#feedbackContainer");

  } else if (inIntro) {
    clearFeedback();
  } else {
    

    if (studentId === "stuA" && currentQuestions[qIndex].name.startsWith("grind") ||
      studentId === "stuB" && currentQuestions[qIndex].name.startsWith("hon")
    ) {
      quizSelf.push(cor);
    } else {
      quizOthers.push(cor);
    }
    clearFeedback();
  }
}


function clearFeedback(questions) {
  console.log("feedback", questions);
  $("#feedbackContainer").empty().hide();
  qIndex += 1;
  if (qIndex < currentQuestions.length) {
    makeQuestion(currentQuestions);
  } else if (inIntro) { inIntro = false; chooseStudent(); }
  else if (!inQuiz) talkInGroup();
  else if (inQuiz) quizFeedback();
}

function talkInGroup() {
  $("#feedbackContainer").hide();
  $("#teach").show();
  $("#section").html("Talk with Each Other");
  console.log("talk in group");

  $("#teach").html("<h3>Talk with your partner about what you learned, and make sure they understand the following topics:</h3>")

  let topics = [
    "The name of your technique",
    "The shape of the device (grinder or steel)",
    "Why your technique does or does not result in particles on the knife",
    "What condition of the knife does your technique fix",
    "What happens to the knife during use of the device",
    "Misconceptions held about your sharpening technique"
  ]

  for (let i in topics) {
    $("#teach")
      .append('<div class="form-check">' +
        '<input type="checkbox" class="form-check-input">' +
        '<label class="form-check-label" for="exampleCheck1">' + topics[i] + '</label>' +
        '</div>')
  }
  $("#teach").append("<button id='goToQuiz' class='btn btn-outline-secondary'>Take a Quiz</button>");
  $("#goToQuiz").hide();
  $(".form-check").click(function () {
    let checked = $('input[type=checkbox]:checked').siblings().text();
    console.log(checked);


    if (checked === topics.join("")) {
      $("#goToQuiz").show().click(function () {
        quiz();
      });
    } else {
      $("#goToQuiz").hide();
    }
  });
}

function quiz() {
  $("#section").html("Quiz");
  inQuiz = true;
  qIndex = 0;
  console.log("doing quiz");

  $("#teach").hide();
  $("#feedbackContainer").hide();
  console.log(questions);
  currentQuestions = questions;
  makeQuestion(currentQuestions);
}

function quizFeedback() {
  console.log("quizFeedback");
  console.log("quizSelf:", quizSelf);
  console.log("quizOthers:", quizOthers);
  $("#section").html("Feedback!");
  let selfScore = 0, othersScore = 0;
  let selfPoints = 10, othersPoints = 20;
  let bonus = 0;

  let selfFeedback = "", othersFeedback = ""

  for (let i in quizSelf) {
    if (quizSelf[i] === "true") selfScore += selfPoints
  }
  for (let i in quizOthers) {
    if (quizOthers[i] === "true") othersScore += othersPoints
  }

  console.log("score", selfScore + othersScore + bonus);
  if (selfScore < 40) {
    selfFeedback = "You made some mistakes on the video that was assigned to you. You may want to revisit the video and try again."
  } else {
    selfFeedback = "Good work! You know your technique well."
  }

  if (othersScore < 100) {
    othersFeedback = "it seems that your partner may not have taught you well. Make sure you understand the other technique as well as your own."
  } else if (othersScore < 160) {
    othersFeedback = "there are a few points you missed on the other technique. You should teach each other again and retry the quiz."
  } else {
    othersFeedback = "you clearly know how both grinding and honing work and when to use each."
  }
  $("#feedbackContainer").empty().show();
  $("#feedbackContainer").append("<h6>" + selfFeedback + "</h6>");
  $("#feedbackContainer").append("<h6> Also, " + othersFeedback + "</h6>");

  if(othersScore < 160 ){
    $("#feedbackContainer").append("<button id='quizAgain' class='btn btn-outline-secondary'>Teach Each Other Again</button>");
    $("#quizAgain").click(talkInGroup);
    quizSelf = [];
    quizOthers = [];

    // I think we should loop back to the instruction. This jumps me back to Check Understanding quiz, but skips past the video. 
    // Looks like startTime and endTime are culprits here, and I don't want to mess up the timers. Got an easy fix? If not lets just relabel these to Learn Again or something...
    $("#feedbackContainer").append("<button id='videoAgain' class='btn btn-outline-secondary'>Watch Video Again</button>");

    $("#videoAgain").click(function(){
      $("#feedbackContainer").empty();
      scene = 2;  // set the scene so that it will stay at instruction.
      inQuiz = false;
      instruction();
    });

  }
 
}