
hideControls();
playPause();
// const playBtn = document.querySelector("#playSvg");
// const myVideo = document.querySelector("#myVideo");

    function hideControls() {
        console.log('hide')
        document.getElementById("myVideo").controls = false;
        
    }


    function playPause() {
        const myVideo = document.getElementById('myVideo');
        const playSvg = document.getElementById('playSvg');
        
        if (myVideo.paused) {
            myVideo.play();
            playSvg.style.display = "none";
        } else {
            myVideo.pause();
            playSvg.style.display = "flex";
        }
    }