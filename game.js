function clickGame(i){ 
    var x = document.getElementById("game" + i).innerHTML;
    document.getElementById("gameName").innerHTML = "歡迎來到，" + x + "!";
    
    for(var j = 1;j <= 5;j++){  
         document.getElementById("BTNgame" + j).style="display:none";
         document.getElementById("game" + j + "_play").style="display:none";
    }
    document.getElementById("BTNgame" + i).style="display:flex";
    document.getElementById("BTNgame" + i).innerHTML="開始 " + x;
}

function StartGame(i){
    
    document.getElementById("game" + i + "_play").style="display:inline";
    document.getElementById("BTNgame" + i).style = "display:none";
}
