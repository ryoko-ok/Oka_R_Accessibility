function playVideo(num) {
    console.log(num);
    tag = document.getElementById("video");
    switch (num) {
        case 1:
            tag.src = "video/movie60sTiffany.mp4";
            break;
        case 2:
            tag.src = "video/tv90sDharmaandgreg.mp4";
            break;
        case 3:
            tag.src = "audio/music50sIwannabelovedbyyou.mp3";
            break;
    }
}

var mybutton = document.getElementById("backtotop");
        
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}