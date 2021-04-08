var mediaPlayer=document.getElementById("mediaPlayer"),
    links=videoPlayer.getElementsByTagName('a');
    inks=audioPlayer.getElementsByTagName('a');

for(var i=0; i<links.length; i++) {
  links[i].onclick=handler;
}

function handler(e) {
	e.preventDefault();
	targetHref = this.getAttribute("href");
    video = document.querySelector("#mediaPlayer video");
    audio = document.getElementById("#mediaPlayer audio")

    // Pause anything that is currently playing
    audio.pause();
    video.pause();

    if (targetHref.endsWith('mp3')) {
        // Audio
        audio.src = targetHref;
        audio.play();
    } else {
        // Video
        filename = targetHref.substr(0, targetHref.lastIndexOf('.')) || targetHref;
        video.removeAttribute("controls");
	      video.removeAttribute("poster");
        source = document.querySelectorAll("#mediaPlayer video source");
	      source[0].src = filename + ".mp4";
        video.load();
	      video.play();
    }    
}