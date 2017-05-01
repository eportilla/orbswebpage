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

/* modal
*/

// Get the modal
var modal = document.getElementById("download-modal");

// Get the button that opens the modal
var btnnav = document.getElementById("dlbtn-nav");

var btnmain = document.getElementById("dlbtn-main");

btnnav.addEventListener('click', openModal);
btnmain.addEventListener('click', openModal);

// Get the <span> element that closes the modal
var btnclose = document.getElementById("btnclose-modal");

// When the user clicks the button, open the modal
function openModal(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnclose.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Slick carousel
*/
$(document).ready(function() {
    $('.image-display').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.image-scroller'
    });
});

$(document).ready(function(){
  $('.image-scroller').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    asNavFor: '.image-display'
  });
});