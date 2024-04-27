let play = document.getElementById("play");
let volume = document.getElementById("vol");
let next = document.getElementById("next");
let scale = document.getElementById("scale");
let volumerange = document.getElementById("volume-range");

let video = document.querySelector("video");
console.log(play, volume, next, scale);

play.addEventListener("click", () =>{
    if (video.paused==true) {
        video.play();
    } else{
        video.pause();
    }
});
volumerange.addEventListener("input", () =>{
    console.log(volumerange.value);
    video.volume = volumerange.value;
});
volume.addEventListener("click", () => {
    if (volumerange.mute==false) {
        volumerange.mute();
    } else {
        volumerange.mute(true);
    }
})