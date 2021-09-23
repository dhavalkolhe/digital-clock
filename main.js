'use strict';

setInterval(function(){
    const time = document.querySelector("#time");
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let zone = "AM";
    
    const arr = ["SUN","MON","TUE","WED","THURS","FRI","SAT"]

    if(hours >12){
        zone = "PM";
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }



    time.textContent = hours +":"+ minutes +":" + seconds + " "+ zone + " " + arr[day];
}, 1000);

