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
  $("#player").hide();
  $("#teach").hide();
  $("#feedbackContainer").hide();
  $("#studentId").hide();
});

function introduction() {
  scene = 1;
  $("#intro").show();
  qIndex = 0;
  currentQuestions = introductionScripts;
  makeQuestion(currentQuestions);
  stopVideo();
}

function chooseStudent() {
  scene = 1;
  $("#section").html("Select Role")
  $("#player").hide();
  $("#studentId").show();
  $("#intro").hide();
  stopVideo();

  $(".studentId div button").click(function () {
    if (this.id === "stuA") {
      studentId = "stuA";
      startTime = 120;
      endTime = 122;
      currentQuestions = questions.filter(i => i.name.substr(0, 5) === "grind");
      console.log(expertQuizQuestions);
    } else if (this.id === "stuB") {
      studentId = "stuB";
      startTime = 140;
      endTime = 142;
      currentQuestions = questions.filter(i => i.name.substr(0, 6) === "honing");
    } else {

    }
    console.log(studentId);
    $(".studentId").hide();
    instruction();
  });
}


function instruction() {
  $("#section").html("Watch a Video");
  $("#player").show();
  loadVideo("YAyjVtHm418", startTime, endTime, 'large');
}

function checkUnderstanding() {
  $("#section").html("Check Your Understanding");
  console.log("quiz01");
  $("#player").hide();
  // console.log(expertQuizQuestions);
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
  $("#teach").show();
  $("#section").html("Talk among Each Other");
  console.log("talk in group");

  $("#teach").html("<h3>Talk among your group about what you learned, and make sure your group mates understand the following topics:</h3>")

  let topics = [
    "A",
    "B",
    "C",
    "D"
  ]

  for (let i in topics) {
    $("#teach")
      .append('<div class="form-check">' +
        '<input type="checkbox" class="form-check-input">' +
        '<label class="form-check-label" for="exampleCheck1">' + topics[i] + '</label>' +
        '</div>')
  }
  $("#teach").append("<button id='goToQuiz' class='btn btn-outline-secondary'>Take a Quiz!</button>");
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
  $("#section").html("Quiz Time!");
  inQuiz = true;
  qIndex = 0;
  console.log("doing quiz");

  $("#teach").hide();
  console.log(questions);
  currentQuestions = questions;
  makeQuestion(currentQuestions);
}

function quizFeedback() {
  console.log("quizFeedback");
  console.log("quizSelf:", quizSelf);
  console.log("quizOthers:", quizOthers);

  let selfScore = 0, othersScore = 0;
  let selfPoints = 10, othersPoints = 20;
  let bonus = 0;

  for (let i in quizSelf) {
    if (quizSelf[i] === "true") selfScore += selfPoints
  }
  for (let i in quizOthers) {
    if (quizOthers[i] === "true") othersScore += othersPoints
  }

  console.log("score", selfScore + othersScore + bonus);
}