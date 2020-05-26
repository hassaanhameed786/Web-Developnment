const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds'); 
const countdown =
document.getElementById('countdown');


const currentYearTime = new Date().getFullYear();

const newYearTime = new Date(`Janurary 01 ${currentYearTime + 1} 00:00:00 `);

function  updateCountDown(){
    const currentTime = new Date();
    const differ = newYearTime - currentTime;
    


    const dys = Math.floor(differ / 1000 / 60 / 60 / 24);

    const hrs = Math.floor(differ / 1000 / 60 / 60) % 24;


    const min= Math.floor(differ / 1000 / 60 ) % 60 ;

    const sec = Math.floor(differ / 1000 ) % 60 ;

    console.log(seconds);

    days.innerHTML = dys;
    hours.innerHTML = hrs  < 10 ? '0' + hrs : hrs;
    minutes.innerHTML = min  < 10 ? '0' + min : min;
    seconds.innerHTML = sec  < 10 ? '0' + sec : sec;
    
}

setInterval(updateCountDown,1000);


