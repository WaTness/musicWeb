function clickGame(i){ 
    var x = document.getElementById("game" + i).innerHTML;
    document.getElementById("gameName").innerHTML = "歡迎來到，" + x + "!";
    
    for(var j = 1;j <= 5;j++){  
         document.getElementById("BTNgame" + j).style="display:none";
    }
    document.getElementById("BTNgame" + i).style="display:flex";
    document.getElementById("BTNgame" + i).innerHTML="開始 " + x + " 遊戲";
}
function StartGame1(i){

}
function StartGame2(i){

}
function StartGame3(i){

}
function StartGame4(i){

}
function StartGame5(i){

}
