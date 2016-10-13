/* video
*/

//Create a script element
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//Mute Youtube player using youtube iframe api
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    player.playVideo();
    // Mute!
    player.mute();
}

/* sound
*/

function playSoundOnClick() {
  document.getElementById('sound_confirm').play();
};

function playSoundOnHover() {
  document.getElementById('sound_hover').play();
}

/* side navigation bars
*/  

// Get the viewport window width this is used to set the width of the nav bars
/*function getWindowWidth() {
  var windWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

  var width = "20%";*/
  /*if (windWidth <= 768) {
    width = "50%";
  }*/

  /*return width;
}

function openLeftnav() {
	document.getElementById("open-left-menu").style.width = "0";
	document.getElementById("sideNavleft").style.width = getWindowWidth();
}

function closeLeftnav() {
	document.getElementById("sideNavleft").style.width = "0";
  document.getElementById("open-left-menu").style.width = getWindowWidth();
}

function openRightnav() {
	document.getElementById("open-right-menu").style.width = "0";
  document.getElementById("sideNavright").style.width = getWindowWidth();
}

function closeRightnav() {
  document.getElementById("sideNavright").style.width = "0";
  document.getElementById("open-right-menu").style.width = getWindowWidth();
}*/