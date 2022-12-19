var musicSrc;
function MozartAudioTest(name){
    var musician = "./Audios/" + name + "/"
    musicSrc = document.getElementById("selectMusic").selectedIndex;
    musicSrc=document.getElementById("select" + (musicSrc)).value;
    document.getElementById("audioController").src= musician + musicSrc;
}
function AudioAll(){
    var names = document.getElementsByTagName("optgroup");
    var musicIndx;
    
    musicSrcUn = document.getElementById("selectMusic").selectedIndex;
    musicSrc=document.getElementById("select" + (musicSrcUn)).value;
    var MU;
    MU = document.getElementById("select" + (musicSrcUn)).className;
    if(MU == "M") {musicIndx = names[0].id;}
    if(MU == "Bee") {musicIndx = names[1].id;}
    if(MU == "B")  {musicIndx = names[2].id;}
    if(MU == "H")  {musicIndx = names[3].id;}
    var musician = "./Audios/" + musicIndx + "/";
    document.getElementById("audioController").src= musician + musicSrc;
}