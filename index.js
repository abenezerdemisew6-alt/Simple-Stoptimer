let n,timer;
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector("#reverse");
const minutess = document.querySelector("#minute");
const secondss = document.querySelector("#second");
let [minutes,seconds] = [0,0];
// if(seconds === 60){
//   minutes++;
//   seconds = 0;
// }
function counter(){
  seconds = 0;
  timer = setInterval(()=>{
    seconds++;
    if(seconds === 60){
  minutes++;
  seconds = 0;
}
minutess.innerHTML=minutes < 10 ? "0"+minutes : minutes;
secondss.innerHTML = seconds < 10 ? "0"+seconds : seconds;
  },1000)
    startBtn.disabled = true;
}
function pause(){
  clearInterval(timer);
  pauseBtn.disabled = true;
}
resetBtn.addEventListener("click",(e)=>{
  clearInterval(timer);
  [minutes,seconds] = [0,0];
  minutess.innerHTML = "00";
  secondss.innerHTML = "00";
});