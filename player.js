/**
 * Youtube API
 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'YAyjVtHm418',
    playerVars: { 'autoplay': 0, 'wmode': 'transparent', 'controls': 1, 'rel': 0, 'modestbranding': 1, 'showinfo': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
  document.getElementById('player').style['z-index'] = -10;
  document.getElementById('player').style['-webkit-transform'] = 'translateZ(0)';
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  player.seekTo(0);
  player.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var letPlayerChange = true;

function onPlayerStateChange(event) {
  // if (letPlayerChange) {
  //     letPlayerChange = false
  //     var scene = getScene("scene1");
  //     run(scene)
  // }
  switch(scene) {
    case 0:
      chooseStudent();
      scene += 1;
      break;

    default:
      console.log("other scenes");
  }
  
  console.log(event);
}

// Youtube API stuff

function stopVideo() {
  player.stopVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function playVideo() {
  player.playVideo();
}

function getPlayerTime() {
  return player.getCurrentTime();
}

function loadVideo(id, startSeconds, endSeconds, suggestedQuality) {
  player.loadVideoById({
    'videoId': id,
    'startSeconds': startSeconds,
    'endSeconds': endSeconds,
    'suggestedQuality': suggestedQuality
  });

  let videoLength = endSeconds - startSeconds;
  videoLength *= 1000;

  calculateTime(startSeconds, endSeconds, videoLength);
}

function calculateTime(start, end, videoLength) {
  startedCalculating = true;
  let length = 0;
  console.log(videoLength);

  console.log("end", end);

  var interval = setInterval(function () {
    console.log(player.getCurrentTime());
    if (player.getPlayerState() === 2) { // paused
      paused = true;
    }
    if (player.getPlayerState() === 1) { // playing
      paused = false;
    }

    if (!paused) {
      length += 500;
    }
    // console.log(length);

    // if (length >= videoLength || player.getCurrentTime() >= end) {
    if (player.getCurrentTime() >= end) {
      
      stopVideo();
      startedCalculating = false;

      clearInterval(interval);
      console.log("interval cleared");
    }

    $("#next").click(function () {
      clearInterval(interval);
    });

    $('#tell').click(function () {
      clearInterval(interval);
    });
  }, 500);
}