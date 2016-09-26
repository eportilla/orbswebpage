function openLeftnav() {
	document.getElementById("open-left-menu").style.width = "0";
	document.getElementById("sideNavleft").style.width = "20%";
}

function closeLeftnav() {
	document.getElementById("sideNavleft").style.width = "0";
  document.getElementById("open-left-menu").style.width = "20%";
}

function openRightnav() {
	document.getElementById("open-right-menu").style.width = "0";
  document.getElementById("sideNavright").style.width = "20%";
}

function closeRightnav() {
  document.getElementById("sideNavright").style.width = "0";
  document.getElementById("open-right-menu").style.width = "20%";
}

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