var min = 00;
var sec = 00;
var msec = 00;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

 function timer(){
    msec++
    msecHeading.innerHTML = msec;
    
    if(msec >= 100){
      sec++
        msec = 00;
        secHeading.innerHTML = sec;
        
    }
   else if(sec >= 60){
        min++
        sec = 00;
        minHeading.innerHTML = min;
    }
}


function start(){
    if(!interval){
    interval = setInterval(timer,10);
    
}
}
function pause(){
    clearInterval(interval);
    interval = false;
}


function stop(){
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    pause();
}
function reset(){
    stop();
    start();
}