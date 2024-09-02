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

        var driveroptions = ["simplefocshield", "simplefocmini", "bg431besc1", "l298n"];

        for (var i = 0; i < driveroptions.length; i++) {
            var hideshow = document.getElementsByClassName("showon" + driveroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "none";
            }
        }

        var pwmoptions = ["3pwm", "6pwm", "2pwm4", "2pwm2", "4pwm"];

        for (var i = 0; i < pwmoptions.length; i++) {
            if (document.getElementById(pwmoptions[i]).checked) {
                var hideshow = document.getElementsByClassName("showon" + pwmoptions[i]);
                for (var j = 0; j < hideshow.length; j++) {
                    hideshow[j].style.display = "inline";
                }
            }
            else {
                var hideshow = document.getElementsByClassName("showon" + pwmoptions[i]);
                for (var j = 0; j < hideshow.length; j++) {
                    hideshow[j].style.display = "none";
                }
            }
        }
    }

    else {
        var hideshow = document.getElementsByClassName("showonotherdriverboard");
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }

        var pwmoptions = ["3pwm", "6pwm", "2pwm4", "2pwm2", "4pwm"];

        for (var i = 0; i < pwmoptions.length; i++) {
            var hideshow = document.getElementsByClassName("showon" + pwmoptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "none";
            }
        }

        var boardselectoroptions = ["simplefocshield", "simplefocmini", "bg431besc1", "l298n"];

        for (var i = 0; i < boardselectoroptions.length; i++) {
            if (document.getElementById("boardselector").value == boardselectoroptions[i]) {
                var hideshow = document.getElementsByClassName("showon" + boardselectoroptions[i]);
                for (var j = 0; j < hideshow.length; j++) {
                    hideshow[j].style.display = "inline";
                }
            }
            else {
                var hideshow = document.getElementsByClassName("showon" + boardselectoroptions[i]);
                for (var j = 0; j < hideshow.length; j++) {
                    hideshow[j].style.display = "none";
                }
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

    var sensoroptions = ["encoder", "halleffect", "analog", "pwm", "blocking", "interrupting"];
    
    for (var i = 0; i < sensoroptions.length; i++) {
        if (document.getElementById(sensoroptions[i]).checked) {
            var hideshow = document.getElementsByClassName("showon" + sensoroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon" + sensoroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "none";
            }
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

    var motioncontrolleroptions = ["velocity", "angle", "torque", "velocityopenloop", "angleopenloop"];

    for (var i = 0; i < motioncontrolleroptions.length; i++) {
        if (document.getElementById(motioncontrolleroptions[i]).checked) {
            var hideshow = document.getElementsByClassName("showon" + motioncontrolleroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon" + motioncontrolleroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "none";
            }
        }
    }
}

function torquecontrollercheck() {

    var torquecontrolleroptions = ["voltage", "dccurrent", "foccurrent"];

    for (var i = 0; i < torquecontrolleroptions.length; i++) {
        if (document.getElementById(torquecontrolleroptions[i]).checked) {
            var hideshow = document.getElementsByClassName("showon" + torquecontrolleroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon" + torquecontrolleroptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "none";
            }
        }
    }
}

function focmodulationcheck() {

    var focmodulationoptions = ["sinepwm", "trapezoid120", "trapezoid150", "spacevectorpwm"];

    for (var i = 0; i < focmodulationoptions.length; i++) {
        if (document.getElementById(focmodulationoptions[i]).checked) {
            var hideshow = document.getElementsByClassName("showon" + focmodulationoptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "inline";
            }
        }
        else {
            var hideshow = document.getElementsByClassName("showon" + focmodulationoptions[i]);
            for (var j = 0; j < hideshow.length; j++) {
                hideshow[j].style.display = "none";
            }
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

function emptycheck(property) {
    if (document.getElementById(property).value != "") {
        var hideshow = document.getElementsByClassName("showon" + property);
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "inline";
        }
    }
    else {
        var hideshow = document.getElementsByClassName("showon" + property);
        for (var i = 0; i < hideshow.length; i++) {
            hideshow[i].style.display = "none";
        }
    }
}

function clearindex() {
    document.getElementById("i").value = ""
    emptycheck("i");
}

function copycode() {
    var r = document.createRange();
    r.selectNode(document.getElementById("code"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}