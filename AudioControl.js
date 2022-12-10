var musicSrc;
function MozartAudioTest(){
    var Mozart = "./Audios/Mozart/"
    musicSrc = document.getElementById("selectMusic").selectedIndex;
    musicSrc=document.getElementById("select" + (musicSrc)).value;
    document.getElementById("audioController").src= Mozart + musicSrc;
}