AOS.init();
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
var aboutcontainer = document.getElementById("aboutcontainer");

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', function (event) {
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  aboutcontainer.style.setProperty('--vh', `${vh}px`);
});

var openingpic = document.getElementById("openingpic");
var showwavydescbutton = document.getElementById("showwavydescription");
var wavydesc = document.getElementById("wavydescription");
$('#body').css('min-height', '100%');

function openNav() {
  document.getElementById("mySidenav").style.width = "fit-content";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  $('.menu-toggler').hide();
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.body.style.backgroundColor = "white";
  $('.menu-toggler').show();
}

$(document).ready(function () {
  $('#view_details').on('click', function () {
    $('#hidden').toggle();

  });
});
$("#showadultingappdescription").click(function () {
  $("#adultingappdescription").toggle();
});
$("#showmusicwebsitedescription").click(function () {
  $("#musicwebsitedescription").toggle();
});
$("#showweatherappdescription").click(function () {
  $("#weatherappdescription").toggle();
});
$("#showsnakegamedescription").click(function () {
  $("#snakegamedescription").toggle();
});
$("#showlavalampappdescription").click(function () {
  $("#lavalampappdescription").toggle();
});










//Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    $("#toTop").fadeOut();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({ scrollTop: 0 }, 800);
}
$('.scrollTo').click(function () {
  var getElement = $(this).attr('href');
  if ($(getElement).length) {
    var getOffset = $(getElement).offset().top;
    $('html,body').animate({
      scrollTop: getOffset
    }, 1000);
  }
  return false;
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);