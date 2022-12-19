var musicSrc;
function MozartAudioTest(name){
    var musician = "./Audios/" + name + "/"
    musicSrc = document.getElementById("selectMusic").selectedIndex;
    musicSrc=document.getElementById("select" + (musicSrc)).value;
    document.getElementById("audioController").src= musician + musicSrc;
}