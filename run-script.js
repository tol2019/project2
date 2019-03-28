let studentId = "";
let scene = 0;
let expertQuizQuestions = {};
let startTime = 0;
let endTime = 0;
let qIndex = 0;

$(document).ready(function () {
  // $("#button-container").hide();
  $("#player").hide();


});

function chooseStudent() {
  scene = 1;
  $("#player").hide();
  stopVideo();

  $(".studentId div button").click(function () {
    if (this.id === "stuA") {
      studentId = "stuA";
      startTime = 120;
      endTime = 122;
      expertQuizQuestions = questions.filter(i => i.name.substr(0, 5) === "grind");
      console.log(expertQuizQuestions);
    } else if (this.id === "stuB") {
      studentId = "stuB";
      startTime = 140;
      endTime = 142;
      expertQuizQuestions = questions.filter(i => i.name.substr(0, 6) === "honing");
    } else {

    }
    console.log(studentId);
    $(".studentId").hide();
    instruction();
  });
}


function instruction() {

  $("#player").show();

  loadVideo("YAyjVtHm418", startTime, endTime, 'large');
}

function checkUnderstanding() {
  console.log("quiz01");
  $("#player").hide();
  console.log(expertQuizQuestions);


  makeQuestion(expertQuizQuestions[qIndex]);
}


function makeQuestion(question) {
  $("#currQuestion").text(question.text);
  makeButtons(question.buttons);
  $("#questionContainer").show("slow");
}

function makeButtons(buttons) {
  $("#buttonContainer").empty();

  buttons.forEach(b => {
    $("<button/>", {
      id: b.id,
      text: b.description,
    })
      .attr("onClick", "giveFeedback(\"" + b.answer + "\",\"" + b.feedback + "\",\"" + b.whereTo + "\")")
      .appendTo("#buttonContainer")

    if (b.image != "") {
      $("<img>", { src: b.image }).appendTo("#" + b.id)
    }
  });
}

function giveFeedback(cor, words, whereTo) {
  $("#questionContainer").hide()

  if (cor == 'true') {
    $("<h1/>", { text: "Correct!" })
      .css('background-color', '#99ff99')
      .appendTo("#feedbackContainer");
  } else {
    $("<h1/>", { text: "That's not correct..." })
      .css('background-color', '#ff6699')
      .appendTo("#feedbackContainer");
  }

  $("<p/>", { text: words }).appendTo("#feedbackContainer")

  $("<button/>", { text: "Continue" })
    .attr("onClick", "clearFeedback(\"" + whereTo + "\")")
    .appendTo("#feedbackContainer");
}


function clearFeedback(whereTo) {
  $("#feedbackContainer").empty();
  qIndex += 1;
  if (qIndex < expertQuizQuestions.length) makeQuestion(expertQuizQuestions[qIndex]);
  else talkInGroup();
}

function talkInGroup() {
  console.log("talk in group");
}