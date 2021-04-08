var videoPlayer=document.getElementById("videoPlayer"),
links=videoPlayer.getElementsByTagName('a');
for(var i=0; i<links.length; i++) {
  links[i].onclick=handler;
}

function handler(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#videoPlayer video");
	video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#videoPlayer video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();    
}