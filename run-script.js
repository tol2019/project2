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
      endTime = 86; // 86
      currentQuestions = questions.filter(i => i.name.substr(0, 5) === "grind");
      console.log(expertQuizQuestions);
    } else if (this.id === "stuB") {
      studentId = "stuB";
      startTime = 88;
      endTime = 155; //121
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
  loadVideo("gUH_GA-L-MM", startTime, endTime, 'large');
  // scene = 3;
}

function checkUnderstanding() {
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
  $("#teach").show();
  $("#section").html("Talk among Each Other");
  console.log("talk in group");

  $("#teach").html("<h3>Talk among your group about what you learned, and make sure your group mates understand the following topics:</h3>")

  let topics = [
    "How your sharpening mechanism works",
    "Use cases for your sharpening technique",
    "Misconceptions held about your sharpening technique"
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
    selfFeedback = "You made some mistakes on the video that was assigned to you. Make sure you check the video again and test your understanding."
  } else {
    selfFeedback = "Good work on your part!"
  }

  if (othersScore < 100) {
    othersFeedback = "It seemed that your group mate didn't teach you well. Make sure you understand the other part of the video!"
  } else if (othersScore < 160) {
    othersFeedback = "Nice work on the teaching in your group! However, there are a few points that your group mate didn't teach you well. Why not try again?"
  } else {
    othersFeedback = "Nice job!"
  }
  $("#feedbackContainer").empty().show();
  $("#feedbackContainer").append("<h6>Score on self: " + selfScore + " out of 40</h6>");
  $("#feedbackContainer").append("<h6>" + selfFeedback + "</h6>");
  $("#feedbackContainer").append("<h6>Score on others: " + othersScore + " out of 160</h6>");
  $("#feedbackContainer").append("<h6>" + othersFeedback + "</h6>");

  if(othersScore < 160 ){
    $("#feedbackContainer").append("<button id='quizAgain' class='btn btn-outline-secondary'>Take the Quiz Again!</button>");
    $("#quizAgain").click(quiz);
  }

  
  
}