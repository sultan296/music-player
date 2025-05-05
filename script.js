let playPause = document.getElementById("playPause");
let song = document.getElementById("song");
let progress = document.getElementById("progress");

song.onloadedmetadata = ()=>{
    progress.value = song.currentTime;
    progress.max = song.duration;
}

playPause.addEventListener("click", ()=>{
    if (playPause.classList.contains("fa-play")) {
        song.play()
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
    } else {
        song.pause()
        playPause.classList.add("fa-play");
        playPause.classList.remove("fa-pause");
    }
})

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1100);
}

progress.onchange = ()=>{
    song.currentTime = progress.value;
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
}

function fastForward() {
    song.currentTime += 5;   
}

function backForward() {
    song.currentTime -= 5;
    
}