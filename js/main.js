(() => {
    // make a reference to all of the buttons
    const playButtons = document.querySelectorAll('.playButton'),
          pauseButtons = document.querySelectorAll('.pauseButton')
          rwButtons = document.querySelectorAll('.rwButton'),
          audioElement = document.querySelector('audio');
  
    let globalPaused = false;
  
    // play the son associated with the button (itsdata-trackref attribute)
    function playTrack() {
      // try to fix pause play //
      // a return statement kills your code execution here - don't go past this point
      if (globalPaused) {
        console.log('paused');
        // if our audio is paused, then just play te track and exit
        resumeTrack();
        return;
      }
  
      //debugger;
      let audioSource = this.dataset.trackref;
  
      // set the audio source
      audioElement.src = `audio/${audioSource}.mp3`;
  
      // load and play it
      audioElement.load();
      audioElement.play();
      //playTrack();
    }
  
    function resumeTrack() {
      globalPaused = false;
      audioElement.play();
    }
  
    function pauseTrack() {
      audioElement.pause();
      globalPaused = true;
    }
  
    function rwTrack() {
      audioElement.currentTime = 0;
    }
  
  
    // process the playButtons and add some event handling
    playButtons.forEach(button => button.addEventListener("click", playTrack));
    pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
    rwButtons.forEach(button => button.addEventListener("click", rwTrack));


    // Video ---------------------------------
    // const playVButtons = document.querySelectorAll('.playVButton'),
    //         pauseVButtons = document.querySelectorAll('.pauseVButton')
    //         rwVButtons = document.querySelectorAll('.rwVButton'),
    //         videoElement = document.querySelector('video');

    // let globalPaused = false;

    // function playVideo() {
    //     // try to fix pause play //
    //     // a return statement kills your code execution here - don't go past this point
    //     if (globalPaused) {
    //       console.log('paused');
    //       // if our audio is paused, then just play te track and exit
    //       resumeVideo();
    //       return;
    //     }
    
    //     //debugger;
    //     let videoSource = this.dataset.videoref;
    
    //     // set the video source
    //     videoElement.src = `video/${videoSource}.mp4`;
    
    //     // load and play it
    //     videoElement.load();
    //     videoElement.play();
    //     //playTrack();
    //   }
    
    //   function resumeVideo() {
    //     globalPaused = false;
    //     videoElement.play();
    //   }
    
    //   function pauseVideo() {
    //     videoElement.pause();
    //     globalPaused = true;
    //   }
    
    //   function rwVideo() {
    //     videoElement.currentTime = 0;
    //   }
    
    
    //   // process the playButtons and add some event handling
    //   playVButtons.forEach(button => button.addEventListener("click", playVideo));
    //   pauseVButtons.forEach(button => button.addEventListener("click", pauseVideo));
    //   rwVButtons.forEach(button => button.addEventListener("click", rwVideo));

  })();
  