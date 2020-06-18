/* NOTE: this changes state:
var changeState = function (state) {
    document.body.className = 'body-state'+state;
}
*/

var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    countdownNumber = 10; //Making sure it always starts from 10, without this it starts from whatever number it had reached when user clicked abort
    document.getElementById('countdown').innerHTML = countdownNumber;

    //Countdown
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            
            if (countdownNumber <= 0){
                changeState(3); //Lift off
            };

        },300);
        
    } else if (state == 3) {
        var succes = setTimeout(function () {
            var randomNumber = Math.round(Math.random()*10);

            console.log('randomNumber: ', randomNumber) //'randomNumber' is a string (text) randomNumber is the actual number.

            //Succes
            if (randomNumber > 5) {
                changeState(4); //Well done 
            
            //Faliure
            } else {
                changeState(5); //Boom
            }

        }, 2000);

    };
}