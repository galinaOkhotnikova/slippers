function Timer(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let s = Math.floor((t / 1000) % 60);
    let m = Math.floor((t / 1000 / 60) % 60);
    let h = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
        'total': t,
        'hours': h,
        'minutes': m,
        'seconds': s
    };
}

function initializeClock(endtime) {
    let timerSpan = document.getElementById('timer');
    
    function updateClock() {
        let t = Timer(endtime);
    
        if (t.total <= 0) {
            clearInterval(timeinterval);
            let deadline = new Date(Date.parse(new Date()) + 1000 * 10000);
            initializeClock(deadline);
        }

        timerSpan.innerHTML = ("0" + t.hours).slice(-2) + ':' + 
                            ("0" + t.minutes).slice(-2) + ':' + 
                            ("0" + t.seconds).slice(-2);
    }
    
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1000 * 10000);

initializeClock(deadline);