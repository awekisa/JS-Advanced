function timer() {

    // connect to DOM buttons
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

// declare timer to undefined
    let timer;

    // attach start Button to mouse event click
    startBtn.on('click', function () {
        // check if timer is defined / start button is ON
        if (!timer){
            // execute step every 1 second
            timer = setInterval(step, 1000);
        }

    });

    // attach stop button to mouse event click
    stopBtn.on('click', function () {
        // stop time increase
        clearInterval(timer)
        // stop button is clicked and
        timer = null;
    })

    // function for the set interval that increase time with 1 second
    function step() {
        let hours = $('#hours');
        let minutes = $('#minutes');
        let seconds = $('#seconds');

        let secVal = Number(seconds.text());
        let minVal = Number(minutes.text());
        let hoursVal = Number(hours.text());


        if (secVal == 59){
            minutes.text(('0' + (minVal + 1)).slice(-2));
            seconds.text('00');
            if (minVal == 59){
                hours.text(('0' + (hoursVal + 1)).slice(-2));
                minutes.text('00');
                if (hoursVal == 23){
                    hours.text('00');
                }
            }
        }
        else{
            seconds.text(('0' + (secVal + 1)).slice(-2))
        }
    }

}