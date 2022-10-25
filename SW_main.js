const time = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let holdTime = 0;
let displayTime;
let past = 0
let count = 0

function countTime(){
    count = setInterval(function(){
        past = Date.now() - startTime + holdTime;
        time.textContent = new Date(past).toISOString().slice(11,23);
    },10
    );
};


startButton.addEventListener('click',function(){
    
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    
    startTime = Date.now();
    countTime();
});

stopButton.addEventListener('click',function(){
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    
    clearInterval(count);
    holdTime += (Date.now() - startTime);
});

resetButton.addEventListener('click',function(){
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    
    clearInterval(count);
    time.textContent = '00:00:00.000';
    holdTime = 0;
});