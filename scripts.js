window.onload = function () {
    var code = document.getElementsByClassName("startup");
    for (var i = 0; i < code.length; i++) {
        code[i].style.display = "none";
    }
}


function changevar(event) {
    try {
        var value = event.target.value;
        var id = event.target.id;
        document.querySelector("#var" + id).innerHTML = value;
        document.querySelector("#var2" + id).innerHTML = value;
    } 
    catch (e) {}
}

function changevarwithcomma(event) {
    try {
        var value = event.target.value;
        var id = event.target.id;
        document.querySelector("#var" + id).innerHTML = ", " + value;
        document.querySelector("#var2" + id).innerHTML = ", " + value;
    } 
    catch (e) {}
}


function motorcheck() {
    if (document.getElementById("bldc").checked) {
        var hideshow = document.getElementsByClassName("showonbldc");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
        var hideshow = document.getElementsByClassName("hideonbldc");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
    else if (document.getElementById("stepper").checked) {
            var hideshow = document.getElementsByClassName("showonstepper");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("hideonstepper");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
}

function drivercheck() {
    if (document.getElementById("boardselector").value == "other") {
        var hideshow = document.getElementsByClassName("showonotherdriverboard");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }

        var hideshow = document.getElementsByClassName("showonsimplefocshield");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonbg431besc1");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonl298n");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }

        if (document.getElementById("3pwm").checked) {
            var hideshow = document.getElementsByClassName("showon3pwm");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon3pwm");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("6pwm").checked) {
            var hideshow = document.getElementsByClassName("showon6pwm");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon6pwm");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("2pwm4").checked) {
            var hideshow = document.getElementsByClassName("showon2pwm4");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon2pwm4");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("2pwm2").checked) {
            var hideshow = document.getElementsByClassName("showon2pwm2");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon2pwm2");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("4pwm").checked) {
            var hideshow = document.getElementsByClassName("showon4pwm");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon4pwm");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
    }

    else {
        var hideshow = document.getElementsByClassName("showonotherdriverboard");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }

        var hideshow = document.getElementsByClassName("showon3pwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showon6pwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showon2pwm4");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showon2pwm2");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showon4pwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }

        if (document.getElementById("boardselector").value == "simplefocshield") {
            var hideshow = document.getElementsByClassName("showonsimplefocshield");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showonsimplefocshield");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("boardselector").value == "bg431besc1") {
            var hideshow = document.getElementsByClassName("showonbg431besc1");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showonbg431besc1");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("boardselector").value == "l298n") {
            var hideshow = document.getElementsByClassName("showonl298n");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showonl298n");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
    }
}

function sensorcheck() {
    if (document.getElementById("nones").checked) {
        var hideshow = document.getElementsByClassName("showonnones");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
        var hideshow = document.getElementsByClassName("showonsensor");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonnones");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonsensor");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }

    if (document.getElementById("encoder").checked) {
        var hideshow = document.getElementsByClassName("showonencoder");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonencoder");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("halleffect").checked) {
        var hideshow = document.getElementsByClassName("showonhalleffect");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonhalleffect");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("spi").checked) {
        if (document.getElementById("spiselector").value == "other") {
            var hideshow = document.getElementsByClassName("showonspi");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showonas5147");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonma730");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
        else if (document.getElementById("spiselector").value == "as5147") {
            var hideshow = document.getElementsByClassName("showonas5147");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showonspi");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonma730");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
        else if (document.getElementById("spiselector").value == "ma730") {
            var hideshow = document.getElementsByClassName("showonma730");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showonas5147");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonspi");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonma730");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonas5147");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonspi");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("i2c").checked) {
        if (document.getElementById("i2cselector").value == "other") {
            var hideshow = document.getElementsByClassName("showoni2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showonas5600");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonas5048");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonanyi2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else if (document.getElementById("i2cselector").value == "as5600") {
            var hideshow = document.getElementsByClassName("showonas5600");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showoni2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonas5048");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonanyi2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else if (document.getElementById("i2cselector").value == "as5048") {
            var hideshow = document.getElementsByClassName("showonas5048");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showonas5600");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showoni2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showonanyi2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonas5048");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonas5600");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showoni2c");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonanyi2c");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
    }

    if (document.getElementById("analog").checked) {
        var hideshow = document.getElementsByClassName("showonanalog");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonanalog");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("pwm").checked) {
        var hideshow = document.getElementsByClassName("showonpwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonpwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function currentsensecheck() {
    if (document.getElementById("currentboardselector").value == "other") {
        var hideshow = document.getElementsByClassName("showonothercurrentboard");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }

        var hideshow = document.getElementsByClassName("showoncurrentsimplefocshield");
        for (var i = 0; i < hideshow.length; i++) {
        hideshow[i].style.display = "none";
        }

        var hideshow = document.getElementsByClassName("showoncurrentbg431besc1");
        for (var i = 0; i < hideshow.length; i++) {
        hideshow[i].style.display = "none";
        }

        if (document.getElementById("nonec").checked) {
            var hideshow = document.getElementsByClassName("showonnonec");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showoncurrentsense");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showonnonec");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showoncurrentsense");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }

        if (document.getElementById("inline").checked) {
            var hideshow = document.getElementsByClassName("showoninline");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showoninline");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }

        if (document.getElementById("lowside").checked) {
            var hideshow = document.getElementsByClassName("showonlowside");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showonlowside");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "none";
            }
        }
    }

    else {
        var hideshow = document.getElementsByClassName("showonothercurrentboard");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }

        var hideshow = document.getElementsByClassName("showoninline");
        for (var i = 0; i < hideshow.length; i++) {
        hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonlowside");
        for (var i = 0; i < hideshow.length; i++) {
        hideshow[i].style.display = "none";
        }
        var hideshow = document.getElementsByClassName("showonhighside");
        for (var i = 0; i < hideshow.length; i++) {
        hideshow[i].style.display = "none";
        }
        
        if (document.getElementById("currentboardselector").value == "simplefocshield") {
            var hideshow = document.getElementsByClassName("showoncurrentsimplefocshield");
            for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showoncurrentbg431besc1");
            for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showoncurrentsense");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }

        else if (document.getElementById("currentboardselector").value == "bg431besc1") {
            var hideshow = document.getElementsByClassName("showoncurrentbg431besc1");
            for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
            }
            var hideshow = document.getElementsByClassName("showoncurrentsimplefocshield");
            for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
            }
            var hideshow = document.getElementsByClassName("showoncurrentsense");
            for (var i = 0; i < hideshow.length; i++) {
                hideshow[i].style.display = "inline";
            }
        }
    }
}

function motioncontrollercheck() {
    if (document.getElementById("velocity").checked) {
        var hideshow = document.getElementsByClassName("showonvelocity");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonvelocity");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("angle").checked) {
        var hideshow = document.getElementsByClassName("showonangle");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonangle");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("torque").checked) {
        var hideshow = document.getElementsByClassName("showontorque");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showontorque");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("velocityopenloop").checked) {
        var hideshow = document.getElementsByClassName("showonvelocityopenloop");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonvelocityopenloop");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("angleopenloop").checked) {
        var hideshow = document.getElementsByClassName("showonangleopenloop");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonangleopenloop");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function torquecontrollercheck() {
    if (document.getElementById("voltage").checked) {
        var hideshow = document.getElementsByClassName("showonvoltage");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonvoltage");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("dccurrent").checked) {
        var hideshow = document.getElementsByClassName("showondccurrent");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showondccurrent");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("foccurrent").checked) {
        var hideshow = document.getElementsByClassName("showonfoccurrent");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonfoccurrent");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function focmodulationcheck() {
    if (document.getElementById("sinepwm").checked) {
        var hideshow = document.getElementsByClassName("showonsinepwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonsinepwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("trapezoid120").checked) {
        var hideshow = document.getElementsByClassName("showontrapezoid120");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showontrapezoid120");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("trapezoid150").checked) {
        var hideshow = document.getElementsByClassName("showontrapezoid150");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showontrapezoid150");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }

    if (document.getElementById("spacevectorpwm").checked) {
        var hideshow = document.getElementsByClassName("showonspacevectorpwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonspacevectorpwm");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function commandercheck() {
    if (document.getElementById("commander").checked) {
        var hideshow = document.getElementsByClassName("showoncommander");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showoncommander");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function monitoringcheck() {
    if (document.getElementById("monitoring").checked) {
        var hideshow = document.getElementsByClassName("showonmonitoring");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonmonitoring");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}


function indexempty() {
    if (document.getElementById("i").value != "") {
        var hideshow = document.getElementsByClassName("showonindex");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonindex");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function psuvoltageempty() {
    if (document.getElementById("psuvoltage").value != "") {
        var hideshow = document.getElementsByClassName("showonpsuvoltage");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonpsuvoltage");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function drivervoltagelimitempty() {
    if (document.getElementById("drivervoltagelimit").value != "") {
        var hideshow = document.getElementsByClassName("showondrivervoltagelimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showondrivervoltagelimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function voltagelimitempty() {
    if (document.getElementById("voltagelimit").value != "") {
        var hideshow = document.getElementsByClassName("showonvoltagelimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonvoltagelimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function velocitylimitempty() {
    if (document.getElementById("velocitylimit").value != "") {
        var hideshow = document.getElementsByClassName("showonvelocitylimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonvelocitylimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function currentlimitempty() {
    if (document.getElementById("currentlimit").value != "") {
        var hideshow = document.getElementsByClassName("showoncurrentlimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showoncurrentlimit");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function pvelempty() {
    if (document.getElementById("pvel").value != "") {
        var hideshow = document.getElementsByClassName("showonpvel");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonpvel");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function ivelempty() {
    if (document.getElementById("ivel").value != "") {
        var hideshow = document.getElementsByClassName("showonivel");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonivel");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function dvelempty() {
    if (document.getElementById("dvel").value != "") {
        var hideshow = document.getElementsByClassName("showondvel");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showondvel");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function pangleempty() {
    if (document.getElementById("pangle").value != "") {
        var hideshow = document.getElementsByClassName("showonpangle");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showonpangle");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}


function clearindex() {
    document.getElementById("i").value = ""
    indexempty()
}

function copycode() {
    var r = document.createRange();
    r.selectNode(document.getElementById("code"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}