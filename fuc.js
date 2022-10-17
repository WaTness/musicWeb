<script>
    digit = new Array("/Images/0.jpg", "/Images/1.jpg", "/Images/2.jpg",
        "/Images/3.jpg", "/Images/4.jpg", "/Images/5.jpg",
        "/Images/6.jpg", "/Images/7.jpg", "/Images/8.jpg", "/Images/9.jpg")
    function clock() {
        time = new Date();
        seconds = time.getSeconds().toString();
        minutes = time.getMinutes().toString();
        hours = time.getHours().toString();
        s5 = hours.substring(0, 1);
        s6 = hours.substring(1, 2);
        if (hours < 10) { s6 = s5; s5 = 0; }
        s3 = minutes.substring(0, 1);
        s4 = minutes.substring(1, 2);
        if (minutes < 10) { s4 = s3; s3 = 0; }
        s1 = seconds.substring(0, 1);
        s2 = seconds.substring(1, 2);
        if (seconds < 10) { s2 = s1; s1 = 0; }
        document.getElementById("sec1").src = digit[s1];
        document.getElementById("sec2").src = digit[s2];
        document.getElementById("sec3").src = digit[s3];
        document.getElementById("sec4").src = digit[s4];
        document.getElementById("sec5").src = digit[s5];
        document.getElementById("sec6").src = digit[s6];
        timer = setTimeout("clock()", 1000);
        }
    </script> 