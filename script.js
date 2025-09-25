let startTime
let elapsed=0;
let timerId;

function updatetime(){
    const now = Date.now();
    const diff = now - startTime + elapsed;

    const  ms = Math.floor(diff / 100) % 10;
    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / 1000 / 60) % 60; 
    const hr  = Math.floor(diff / 1000 / 60 / 60);

     const formatted = hr + ":" + min + ":" + sec + ":" + ms;

    document.getElementById("display").textContent = formatted;
}

document.getElementById("start").addEventListener("click" , () =>{
    if (timerId) return;
    startTime = Date.now();
    timerId = setInterval(updatetime, 10);
});


document.getElementById("stop").addEventListener("click" ,() =>{
    if(!timerId)return;
    clearInterval(timerId);

    elapsed +=Date.now() - startTime;

    timerId = null;
});

document.getElementById("reset").addEventListener("click" ,() =>{
    clearInterval(timerId);
    elapsed = 0;
    timerId = null;
    document.getElementById("display").textContent = "0:0:0:0";
});

